import {Pool, QueryResult} from "pg";
import {pool} from "./pool";
import Query from "./query";

export default class QueryBuilder {
	private readonly _queryArray: Array<Query>;
	private _pool: Pool;

	constructor() {
		this._queryArray = [];
		this._pool = pool;
	}

	public async executeInAsyncTransaction() {
		const client = await this._pool.connect();
		const responseArray = [];

		try {
			await client.query("BEGIN");

			for (const queryObj of this._queryArray) {
				const response = await client.query(queryObj.query, queryObj.values);
				queryObj.successCallback(response);
				responseArray.push(response);
			}

			await client.query("COMMIT");
		} catch (e) {
			await client.query("ROLLBACK");
			throw e;
		} finally {
			client.release();
		}

		return responseArray;
	}

	public addQuery(query: string, successCallback: (queryResult: QueryResult) => void, values?: any[]): QueryBuilder {
		this._queryArray.push(new Query(query, successCallback, values));
		return this;
	}

	public query(queryString: string, values?: any[]): Promise<QueryResult> {
		return pool.query(queryString, values);
	}

	public executeInTransaction() {
		this._pool.connect((connectErr, client, done) => {
			const shouldAbort = (err: Error) => {
				if (err) {
					console.error("Error in transaction", err.stack);
					client.query("ROLLBACK", (rollbackErr) => {
						if (rollbackErr) {
							console.error("Error rolling back client", rollbackErr.stack);
						}
						// release the client back to the pool
						done();
					});
				}
				return !!err;
			};

			client.query("BEGIN", (beginErr) => {
				if (shouldAbort(beginErr)) {
					return;
				}

				this._queryArray.forEach((queryObj) => {
					client.query(queryObj.query, queryObj.values, (queryErr, res) => {
						if (shouldAbort(queryErr)) {
							return;
						}
						queryObj.successCallback(res);
					});
				});

				client.query("COMMIT", (commitErr) => {
					if (commitErr) {
						console.error("Error committing transaction", commitErr.stack);
					}
					done();
				});
			});
		});
	}
}
