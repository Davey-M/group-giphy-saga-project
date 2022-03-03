const axios = require("axios");
const express = require('express');


const router = express.Router();

require("dotenv").config();

router.get("/", (req, res) => {
  axios
    .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log("Error is", error);
      res.sendStatus(500);
    });
});

module.exports = router;