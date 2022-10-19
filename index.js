const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/api");

app.use(
    express.json({
        extended: false,
    })
);

app.use("/api/v1", routes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
