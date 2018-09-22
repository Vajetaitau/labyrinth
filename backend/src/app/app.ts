import * as express from "express";
import * as http from "http";
import * as IO from "socket.io";
import {playerController} from "./controller/player-controller";

const app = express();
const server = http.createServer(app);
const io = new IO(server);

server.listen(3000, () => console.log("Example app listening on port 3000!"));

app.get("/", function (req, res) {
	res.header("Content-type", "text/html");
	return res.end("<h1>Hello, Secure World!</h1>");
});

export default io;

playerController.register();

