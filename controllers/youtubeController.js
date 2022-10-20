const { google } = require("googleapis");
const youtube = google.youtube("v3");
const API_KEY = "AIzaSyAgezA81tytb1rfGlOkq4eqyAVXFyz5JvA";
const CHANNEL_ID = "UCxhygwqQ1ZMoBGQM2yEcNug"; //Raffly Tulfo Channel ID

exports.playlists = async (req, res) => {
    try {
        let queryParams = require("url").parse(req.url, true).query;
        const response = await youtube.playlists.list({
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "id,snippet,contentDetails",
            maxResults: queryParams.perPage,
        });
        return res.json({ status: 200, data: response.data });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
};

exports.playlistItems = async (req, res) => {
    try {
        let queryParams = require("url").parse(req.url, true).query;
        const response = await youtube.playlistItems.list({
            key: API_KEY,
            channelId: CHANNEL_ID,
            playlistId: req.params.id,
            part: "id,snippet,contentDetails",
            q: queryParams.search,
            maxResults: queryParams.perPage,
        });
        return res.json({ status: 200, data: response.data });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
};

exports.search = async (req, res) => {
    try {
        let queryParams = require("url").parse(req.url, true).query;
        const response = await youtube.search.list({
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "id,snippet",
            q: queryParams.search,
            maxResults: queryParams.perPage,
            order: queryParams.order,
        });
        return res.json({ status: 200, data: response.data });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
};
