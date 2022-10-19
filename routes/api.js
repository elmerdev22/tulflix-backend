var router = require("express").Router();

router.get("/playlists", function (req, res) {
    res.json({ foo: "sample express jwfs" });
});

module.exports = router;
