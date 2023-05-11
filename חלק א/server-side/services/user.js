const db = require('./db');
const helper = require('../helper');
const config = require('../config');
const multer = require('multer')

async function allUsers() {
  return await db.query(
    'SELECT * FROM myproject.customers;'
  );
}

async function createUser(data) {
  
  if (data.id == null || data.lastName == null || data.name == null || data.phone == null || data.mobilePhone == null || data.birthDate == null || data.city == null || data.street == null || data.numStreet == null)
    return ('one or more parameters is null')
  if (!is_israeli_id_number(data.id))
    return ('id is not correctly!')
  if (data.name.length < 2 || data.lastName < 2)
    return ('name its too short')
  if (data.city.length < 2)
    return ('city its too short')
  if (data.street.length < 2)
    return ('street its too short')
    if (!isInThePast(data.birthDate) )
    {
      return ('date its not correct')
    }
  
  const result = await db.query(`SELECT * FROM myproject.Customers where Id="${data.id}";`);
  if (result[0] == null) {
    await db.query(
      ` INSERT INTO myproject.customers (Id,FirstName,LastName,Phone,MobilePhone,Img,DateOfBirth,City,Street,Num) VALUES ("${data.id}", "${data.lastName}","${data.name}","${data.phone}", "${data.mobilePhone}", "http://localhost:6200/${data.imageName}","${data.birthDate}", "${data.city}", "${data.street}", ${data.numStreet});`);
    return ('User successfully added! ');
  }
  else
    throw "user already exist "

}

async function userSearch(data) {
  const result = await db.query(
    ` SELECT * 
      FROM myproject.customers
      WHERE customers.Id="${data.id}"`
  );
  if (result[0] == null) {
throw "user not exist!"
  }
  return (result);

}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})



///
function isInThePast(date) {
  const today = new Date();
  return date < today.toISOString().substring(0, 10);
}
function is_israeli_id_number(id) {
  id = String(id).trim();
  if (id.length > 9 || isNaN(id)) return false;
  id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
  return Array.from(id, Number).reduce((counter, digit, i) => {
    const step = digit * ((i % 2) + 1);
    return counter + (step > 9 ? step - 9 : step);
  }) % 10 === 0;
}





//bonus
const upload = multer({ storage: storage })

module.exports = {
  allUsers, createUser, userSearch, is_israeli_id_number, isInThePast,storage, upload
}