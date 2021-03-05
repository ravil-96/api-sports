const server = require('./server')
//server.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))
const port = 3000;

server.listen(port, () =>
    console.log("Express departing now from http://localhost:" + port)
);
