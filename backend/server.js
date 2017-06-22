const config = require("./config");
const app = require("./app")();

const port = config.port;
app.listen(port, function() {
    console.log(`My app listening on port ${port}!`);
});