const http = require("http");
const route = require("./routes");

const server = http.createServer(route.handler);

server.listen(3000);

/**
 * Single file code
 */

// const http = require("http");
// const fs = require("fs");

// function reqListener(req, res) {
//   //   console.log(req.url, req.method, req.headers);
//   //   process.exit();
//   res.setHeader("Content-Type", "text/html");
//   if (req.url == "/list") {
//     res.write("<html>");
//     res.write("<head>Inside route list</head>");
//     res.write("<body>In the list route</body>");
//     res.write("</html>");
//     return res.end();
//   }
//   if (req.url === "/message" && req.method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });

//     let message;
//     return req.on("end", () => {
//       const bodyParsed = Buffer.concat(body).toString();
//       message = bodyParsed.split("=")[1];
//       //Asynchrous cdde execution
//       fs.writeFile("message.txt", message, (err) => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });

//       //Syncherous code execution
//       //   fs.writeFileSync("message.txt", message);
//       //   res.statusCode = 302;
//       //   res.setHeader("Location", "/");
//       //   return res.end();
//     });
//   }
//   res.write("<html>");
//   res.write("<body>");
//   res.write(
//     "<form action='/message' method='POST'><input name='message' autocomplete='off'/><button>Send</button></form>"
//   );
//   res.write("</body>");
//   res.write("</html>");
// }

// const server = http.createServer(reqListener);

// server.listen(3000);
