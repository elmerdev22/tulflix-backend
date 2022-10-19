var router = require("express").Router();

router.get("/playlists", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;
