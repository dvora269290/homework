const express = require('express');
const router = express.Router();
const user = require('../services/user');


router.get('/all', async function(req, res, next) {
  try {
    res.json(await user.allUsers(req.query));
  } catch (err) {
    console.error(`Error while getting all users`, err.message);
    next(err);
  }
});
router.post('/add',async function(req, res, next) {
  try {
    res.json(await user.createUser(req.body));
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

router.post('/search',async function(req, res, next) {
  try {
    res.json(await user.userSearch(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;