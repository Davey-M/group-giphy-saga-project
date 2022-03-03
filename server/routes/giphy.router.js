const axios = require("axios");
const express = require('express');

const router = express.Router();

require("dotenv").config();

router.get("/:q", (req, res) => {

  const q = req.params.q;

  axios
    .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${q}&rating=pg-13`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log("Error is", error);
      res.sendStatus(500);
    });
});

module.exports = router;