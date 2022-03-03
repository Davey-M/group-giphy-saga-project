const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  let newGif = req.body
  let queryText = `
    INSERT INTO "favorites" ("name", "img_url", "img_id", "category_id")
    VALUES ($1, $2, $3, $4);  
  `;
  const values = [newGif.name, newGif.img_url, newGif.img_id, newGif.category_id];
  pool.query(queryText, values)
    .then((result) => {
      console.log("POST success", result);
      res.sendStatus(201)
    }).catch((error) => {
      console.log("Server error", error);
      res.sendStatus(500)
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:img_id', (req, res) => {
  let img_id = req.params.img_id;
  let queryText = `DELETE FROM "favorites" WHERE "img_id" = $1;`

  pool.query(queryText, [img_id])
    .then((result)=> {
      console.log('Delete successful');
      
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Server error', error);
      
      res.sendStatus(500);
    })

});

module.exports = router;
