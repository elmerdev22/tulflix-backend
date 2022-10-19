module.exports = (function () {
    "use strict";
    var router = require("express").Router();

    router.get("/api/v1/playlists", function (req, res) {
        res.json({ foo: "sample express js" });
    });

    return router;
})();
