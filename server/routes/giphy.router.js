const axios = require("axios");

require("dotenv").config();

app.get("/giphy", (req, res) => {
  axios
    .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      console.log("Error is", error);
      res.sendStatus(500);
    });
});
