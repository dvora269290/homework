const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function alldetailsAboutCovid() {
  return await db.query(
    'SELECT * FROM myproject.detailsAboutCovid;'
  );
}
async function allUsersSicks() {
  return await db.query(
    `select *from customers
    where Id  in(
    select CustomerId
    from detailsaboutcovid
    where DATE_ADD(detailsaboutcovid.PositiveResultDate, INTERVAL 14 DAY)>DATE_FORMAT(now(),'%Y-%m-%d'))`
  );
}
async function createDetailsAboutCovid(data) {
  
  if (data.recoveryDate != "" && data.positiveResultDate != "") {
    const d1 = parseDate(data.recoveryDate);
    const d2 = parseDate(data.positiveResultDate);
    let difference = d1.getTime() - d2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    if (TotalDays != 14) {
      throw 'positive result date or recovery date not correct '
    }

  }

  if (data.userId == null)
    throw 'Must contain user ID';

  if (data.dateOfVaccination1 == null && data.dateOfVaccination2 == null && data.dateOfVaccination3 == null && data.dateOfVaccination4 == null && data.vaccineManufacturer1 == null && data.vaccineManufacturer2 == null && data.vaccineManufacturer3 == null && data.vaccineManufacturer4 == null && data.positiveResultDate == null && data.recoveryDate == null)
    throw 'No details';

  const result = await db.query(
    ` SELECT * 
      FROM myproject.detailsaboutcovid
      WHERE detailsaboutcovid.CustomerId="${data.userId}"`
  );
  if (result[0] == null) {

    await db.query(
      `INSERT INTO myproject.detailsaboutcovid(CustomerId,DateOfVaccination1,DateOfVaccination2,DateOfVaccination3,DateOfVaccination4,VaccineManufacturer1,VaccineManufacturer2,VaccineManufacturer3,VaccineManufacturer4,PositiveResultDate,RecoveryDate) 
     VALUES ("${data.userId}",'${data.dateOfVaccination1}',IF('${data.dateOfVaccination2}' ="", NULL, '${data.dateOfVaccination2}'),IF('${data.dateOfVaccination3}' ="", NULL, '${data.dateOfVaccination3}'),IF('${data.dateOfVaccination4}' ="", NULL, '${data.dateOfVaccination4}') ,IF('${data.vaccineManufacturer1}' ="", NULL, '${data.vaccineManufacturer1}'),
     IF('${data.vaccineManufacturer2}' ="", NULL, '${data.vaccineManufacturer2}'),IF('${data.vaccineManufacturer3}' ="", NULL, '${data.vaccineManufacturer3}'),IF('${data.vaccineManufacturer4}' ="", NULL, '${data.vaccineManufacturer4}'),IF('${data.positiveResultDate}' ="", NULL, '${data.positiveResultDate}'),IF('${data.recoveryDate}' ="", NULL, '${data.recoveryDate}'));`

    );

    return ('details successfully added!');
  }
  else {
    throw 'for this customer details already exist'
  }

}
async function detailsAboutCovidSearch(data) {
  const result = await db.query(
    ` SELECT * 
  FROM myproject.detailsaboutcovid
  WHERE detailsaboutcovid.CustomerId="${data.id}"`
  );
  if (result[0] == null) {
    return ('details about this user not exist')
  }

  if (result[0].DateOfVaccination1 != null) {
    result[0].DateOfVaccination1 = new Date(result[0].DateOfVaccination1.getTime() + Math.abs(result[0].DateOfVaccination1.getTimezoneOffset() * 60000))
    result[0].DateOfVaccination1 = result[0].DateOfVaccination1.toISOString().substring(0, 10)
  }

  if (result[0].DateOfVaccination2 != null) {
    result[0].DateOfVaccination2 = new Date(result[0].DateOfVaccination2.getTime() + Math.abs(result[0].DateOfVaccination2.getTimezoneOffset() * 60000))
    result[0].DateOfVaccination2 = result[0].DateOfVaccination2.toISOString().substring(0, 10)
  }
  if (result[0].DateOfVaccination3 != null) {
    result[0].DateOfVaccination3 = new Date(result[0].DateOfVaccination3.getTime() + Math.abs(result[0].DateOfVaccination3.getTimezoneOffset() * 60000))
    result[0].DateOfVaccination3 = result[0].DateOfVaccination3.toISOString().substring(0, 10)
  }
  if (result[0].DateOfVaccination4 != null) {
    result[0].DateOfVaccination4 = new Date(result[0].DateOfVaccination4.getTime() + Math.abs(result[0].DateOfVaccination4.getTimezoneOffset() * 60000))
    result[0].DateOfVaccination4 = result[0].DateOfVaccination4.toISOString().substring(0, 10)
  }

  if (result[0].PositiveResultDate != null) {
    result[0].PositiveResultDate = new Date(result[0].PositiveResultDate.getTime() + Math.abs(result[0].PositiveResultDate.getTimezoneOffset() * 60000))
    result[0].PositiveResultDate = (result[0].PositiveResultDate.toISOString().substring(0, 10))
  }
  if (result[0].RecoveryDate != null) {
    result[0].RecoveryDate = new Date(result[0].RecoveryDate.getTime() + Math.abs(result[0].RecoveryDate.getTimezoneOffset() * 60000));
    result[0].RecoveryDate = (result[0].RecoveryDate.toISOString().substring(0, 10));

  }
  return (result);
}

async function activeCovidPatients() {
  return await db.query(
    'SELECT * FROM myproject.detailsAboutCovid ;'
  );
}





//
function parseDate(input) {
  let parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based

}

module.exports = {
  alldetailsAboutCovid,allUsersSicks, createDetailsAboutCovid, detailsAboutCovidSearch, activeCovidPatients, parseDate
}