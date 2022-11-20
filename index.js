const http = require("http");
const fs = require("fs");
// const qs = require('')
const port = 3000;
const hostName = "127.0.0.1";
const server = http.createServer((req, res) => {
  if (req.url === "/pages") {
    fs.readFile("./pages.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/pages/sports") {
    fs.readFile("./sports.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/pages/about") {
    fs.readFile("./about.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/files") {
    fs.readFile("./files.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/files/shops") {
    fs.readFile("./shops.txt", { encoding: "utf-8" }, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/txt" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/files/people") {
    fs.readFile("./people.txt", { encoding: "utf-8" }, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/txt" });
      res.write(data);
      res.end();
    });
  } else if (req.url.startsWith("/contacts/")) {
    let id = req.url.split("/")[2];
    if (!id) {
      fs.readFile(
        "./contacts.json",
        { encoding: "utf-8" },
        function (err, data) {
          res.writeHead(200, { "Content-Type": "text/json" });
          res.write(data);
          res.end();
        }
      );
    }
     else if (id) {
      fs.readFile(
        "./contacts.json",
        { encoding: "utf-8" },
        function (err, data) {
          data1 = JSON.parse(data);
          data2 = JSON.stringify(data1[id - 1]);
          res.writeHead(200, { "Content-Type": "text/json" });
          res.write(data2);
          res.end();
        }
      );
    }
    else if(Number(id)>3){
    res.write("page not found");
    res.end();
    }
  } else {
    res.statusCode = 404;
    res.write("page not found");
    res.end();
  }
});

server.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}`);
});
