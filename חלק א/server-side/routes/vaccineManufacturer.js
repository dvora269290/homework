const express = require('express');
const router = express.Router();
const vaccineManufacturer = require('../services/vaccineManufacturer');


router.get('/all', async function(req, res, next) {
  try {
    res.json(await vaccineManufacturer.allVaccineManufacturer(req.query));
  
  } catch (err) {
    console.error(`Error while getting vaccineManufacturer`, err.message);
    next(err);
  }
});
router.post('/add',async function(req, res, next) {
  try {
    res.json(await vaccineManufacturer.createVaccineManufacturer(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);  
  }
});

module.exports = router;