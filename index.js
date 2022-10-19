const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

var routes = require("./routes/api");
app.use("/", routes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
