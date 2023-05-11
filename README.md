# homework
1)שימוש בשרת


get בקשות:
localhost:6200/api/user/all
![image](https://github.com/dvora269290/homework/assets/132925327/7219657e-51ce-415f-b0e7-848a1171e7ae)
localhost:6200/api/vaccineManufacturer/all
![image](https://github.com/dvora269290/homework/assets/132925327/e45a50f2-decf-4fd5-8f76-0eac49789252)
localhost:6200/api/detailsAboutCovid/all
![image](https://github.com/dvora269290/homework/assets/132925327/d5f0fa5b-687d-464f-bf3a-39f78796b1b8)
localhost:6200/api/user/allSicksToday
![image](https://github.com/dvora269290/homework/assets/132925327/b74d6648-6471-4950-b9f4-0a06cd787d4c)


post בקשות:
הוספת משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/334f8845-c4ab-4994-88ef-10d4bfb06b02)
כאשר משתמש כבר קיים:![image](https://github.com/dvora269290/homework/assets/132925327/92e867bd-8797-4aaf-9042-02afa81da456)
חיפוש משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/38270e74-fb76-40b9-98e7-9082f66eed99)
הוספת פרטי משתמש(חיסונים או מחלה):![image](https://github.com/dvora269290/homework/assets/132925327/1b9bafef-2524-4db9-881d-6361038c2958)
כאשר קיים כבר פרטי משתמש(חיסונים או מחלה):![image](https://github.com/dvora269290/homework/assets/132925327/bde2f7e8-cedc-4c61-ad26-d88389d91b16)
חיפוש פרטי משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/a6415bdd-1af5-4128-9e75-36751065770b)
הוספת יצרן חיסון:![image](https://github.com/dvora269290/homework/assets/132925327/3a76a300-3c80-41ff-b15e-581b46586b80)
כאשר יצרן כבר קיים:![image](https://github.com/dvora269290/homework/assets/132925327/26c9541e-e099-4c2b-adee-76b8fa984597)



תלויות חיצוניות
-הפלטפורמה עליה כתבתי את הפרויקט.                     Visual studio code   
  Nodejs-סביבת זמן ריצה.
mySql workbench - שמירת מאגרי הנתונים.
Postman-כדי לבצע בדיקות POST  בדיקות GET ביצעתי ישירות בדפדפן CHROME
npm install –g nodemon   	כדי שהתהליך יטען מחדש באופן אוטומטי לאחר כל שינוי-
  מסגרת יישום אינטרנט כדי להגיב לבקשות-                  npm install express                                        


הנחות
•	ניתן לערוך חיסונים שונים עבור אותו משתמש ע"י יצרנים שונים.
•	הפרש התאריכים בין תשובה חיובית להחלמה -14 יום.
•	עבור הטבלאות לקוחות ופרטים בנושא הקורונה בעת יצירת רשומה חדשה השרת מקבל את כל האובייקט. (במקומות שאפשר ללא ערך הערך כברירת המחדל הוא "")
