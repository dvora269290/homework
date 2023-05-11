const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function allVaccineManufacturer() {
  return await db.query(
    'SELECT * FROM myproject.vaccineManufacturer;'
  );
}
async function createVaccineManufacturer(data) {
   const result = await db.query(`SELECT * FROM myproject.vaccineManufacturer where ManufacturerName="${data.name}";`);
    if (result[0] == null )
    {
      await db.query(
        ` INSERT INTO myproject.vaccinemanufacturer (ManufacturerName) VALUES ("${data.name}" );`
      );
      return ('Manufacturer successfully added!');
    }
  else {

    throw 'Manufacturer already exist!'
  }
}

module.exports = {
    allVaccineManufacturer,createVaccineManufacturer
}