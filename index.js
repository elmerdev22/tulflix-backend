const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/api");

app.use(
    express.json({
        extended: false,
    })
);

const validateSignature = (req, res, next) => {
    let xSignature = req.header("X-Signature");
    let appXSignature = process.env.REACT_APP_API_SIGNATURE_KEY;

    if (xSignature !== appXSignature) {
        return res
            .status(400)
            .json({ message: "Invalid Api Access Signature Key" });
    }
    next();
};

app.use(validateSignature);

app.use("/api/v1", routes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
