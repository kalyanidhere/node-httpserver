const http = require("http")
const fs = require("fs")

// this is a COMMENT from github repo...
const app = http.createServer((reaq, resp) =>   //http import here
{
    if (reaq.url == '/') {
        const pageData = fs.readFileSync("pages/index.html")
        // resp.write("<h1> Server Started...</h1>")
        resp.write(pageData)
        resp.end()
    }
    else if (reaq.url == '/about') {
        const pageData = fs.readFileSync("pages/about.html")
        resp.write(pageData)
        // resp.write("<h1>About Page</h1>")
        resp.end()
    }
    else if (reaq.url == '/contact') {
        const pageData = fs.readFileSync("pages/contact.html")
        resp.write(pageData)
        // resp.write("<h1>contact Page</h1>")
        resp.end()
    }
    else {
        resp.writeHead(400, { "Content-Type": "text/html" })
        const pageData = fs.readFileSync("pages/404.html")
        resp.write(pageData)
        // resp.writeHead(400, { "Content-Type": "text/plain" })  // html code will end as a plain then tags will not work
        // resp.write("<h1>404 error page not found</h1>")
        resp.end()
    }
})

// app.listen(port,ip,callback-function)
app.listen(3000, () => { console.log("Server Started on http://127.0.0.1:3000") })
