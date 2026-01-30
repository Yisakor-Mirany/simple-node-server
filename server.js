import http from "http";
import fs from "fs";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });

  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>About</title>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            background: #f9fafb;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
          }

          .container {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            max-width: 420px;
            text-align: center;
          }

          h1 {
            color: #111827;
            margin-bottom: 1rem;
          }

          p {
            color: #4b5563;
            line-height: 1.6;
          }

          a {
            display: inline-block;
            margin-top: 1.5rem;
            text-decoration: none;
            color: #4f46e5;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>About This Project</h1>
          <p>
            This project is a simple Node.js web server built using core modules.
            It demonstrates routing, serving HTML files, and handling 404 errors.
          </p>
          <a href="/">← Back to Home</a>
        </div>
      </body>
      </html>
    `);

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});