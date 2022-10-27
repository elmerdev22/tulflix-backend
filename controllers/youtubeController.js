const { google } = require("googleapis");
const youtube = google.youtube("v3");
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

exports.playlists = async (req, res) => {
    try {
        let queryParams = require("url").parse(req.url, true).query;
        const response = await youtube.playlists.list({
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: queryParams.part,
            maxResults: queryParams.perPage,
        });

        return res
            .status(response.status)
            .json({ status: response.status, data: response.data });
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
            part: queryParams.part,
            q: queryParams.search,
            maxResults: queryParams.perPage,
        });

        return res
            .status(response.status)
            .json({ status: response.status, data: response.data });
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
            part: queryParams.part,
            q: queryParams.search,
            maxResults: queryParams.perPage,
            order: queryParams.order,
        });

        return res
            .status(response.status)
            .json({ status: response.status, data: response.data });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
};
