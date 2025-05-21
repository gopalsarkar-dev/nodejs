import { createServer } from "http";
import { createReadStream } from "node:fs";

const hostname = "127.0.0.1";
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  const stream = createReadStream("./example.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("data", (chunk) => {
    console.log("log data ", chunk);
  });
  stream.on("end", () => res.end());
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
