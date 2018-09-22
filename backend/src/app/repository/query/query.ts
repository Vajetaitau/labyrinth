import {QueryResult} from "pg";

export default class Query {
	private readonly _query: string;
	private readonly _values: any[];
	private readonly _successCallback: (queryResult: QueryResult) => void;

	constructor(query: string, successCallback: (queryResult: QueryResult) => void, values?: any[]) {
		this._query = query;
		this._values = values;
		this._successCallback = successCallback;
	}

	public get query() {
		return this._query;
	}

	public get values() {
		return this._values;
	}

	public get successCallback() {
		return this._successCallback;
	}
}
