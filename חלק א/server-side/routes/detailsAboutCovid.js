const express = require('express');
const router = express.Router();
const detailsAboutCovid = require('../services/detailsAboutCovid');


router.get('/all', async function(req, res, next) {
  try {
    res.json(await detailsAboutCovid.alldetailsAboutCovid(req.query));
  
  } catch (err) {
    console.error(`Error while getting detailsAboutCovid`, err.message);
    next(err);
  }
});
router.get('/allSicksToday', async function(req, res, next) {
  try {
    res.json(await detailsAboutCovid.allUsersSicks(req.query));
  } catch (err) {
    console.error(`Error while getting all users sicks`, err.message);
    next(err);
  }
});
router.post('/add',async function(req, res, next) {
  try {
    console.log(req.body)
    res.json(await detailsAboutCovid.createDetailsAboutCovid(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);  
  }
});
router.post('/search',async function(req, res, next) {
  try {
    console.log(req.body)
    res.json(await detailsAboutCovid.detailsAboutCovidSearch(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);  
  }
});
router.get('/search',async function(req, res, next) {
  try {
    console.log(req.body)
    res.json(await detailsAboutCovid.activeCovidPatients(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);  
  }
});
module.exports = router;