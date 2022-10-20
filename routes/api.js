var router = require("express").Router();

const youtubeController = require("../controllers/youtubeController");

router.get("/playlists", youtubeController.playlists);
router.get("/playlists/items/:id", youtubeController.playlistItems);
router.get("/search", youtubeController.search);

module.exports = router;
