# homework
1)שימוש בשרת


get בקשות:
localhost:6200/api/user/all
![image](https://github.com/dvora269290/homework/assets/132925327/dacdc844-0469-471f-a547-b25748690a37)

localhost:6200/api/vaccineManufacturer/all
![image](https://github.com/dvora269290/homework/assets/132925327/1a8ea057-836a-4565-a7a0-da4d77759e2a)

localhost:6200/api/detailsAboutCovid/all
![image](https://github.com/dvora269290/homework/assets/132925327/8b2e141e-b935-4c6e-bae7-27d6d79f1705)

localhost:6200/api/user/allSicksToday
![image](https://github.com/dvora269290/homework/assets/132925327/55c9a023-4cfe-4c28-8d5a-007625361381)


post בקשות:
הוספת משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/0172aa68-78e3-4d70-b241-28c030bd4cf9)

כאשר משתמש כבר קיים:![image](https://github.com/dvora269290/homework/assets/132925327/faae4f26-5723-4712-a677-a0d42c7d7871)
חיפוש משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/346ca15f-65ac-4bc7-b569-bbc4ec8865d3)
הוספת פרטי משתמש(חיסונים או מחלה):![image](https://github.com/dvora269290/homework/assets/132925327/5b8db988-da56-4ec9-b94f-f47f38dcf10c)

כאשר קיים כבר פרטי משתמש(חיסונים או מחלה) : ![image](https://github.com/dvora269290/homework/assets/132925327/74e314b7-4362-45b6-9810-1e3bf319fd59)

חיפוש פרטי משתמש:![image](https://github.com/dvora269290/homework/assets/132925327/f39b57e0-f925-4a18-b5ce-eb6da477f622)

הוספת יצרן חיסון:![image](https://github.com/dvora269290/homework/assets/132925327/e494b904-d4f5-496d-acaf-f1785640633c)

כאשר יצרן כבר קיים:![image](https://github.com/dvora269290/homework/assets/132925327/c7bf28c5-921c-44aa-b349-b448979df3e6)




2)תלויות חיצוניות

-הפלטפורמה עליה כתבתי את הפרויקט.                     Visual studio code   


Nodejs-סביבת זמן ריצה.


mySql workbench - שמירת מאגרי הנתונים.


Postman-כדי לבצע בדיקות POST  בדיקות GET ביצעתי ישירות בדפדפן CHROME


npm install –g nodemon   	כדי שהתהליך יטען מחדש באופן אוטומטי לאחר כל שינוי-
 
 
 מסגרת יישום אינטרנט כדי להגיב לבקשות npm install express                                  


3)הנחות



•	ניתן לערוך חיסונים שונים עבור אותו משתמש ע"י יצרנים שונים.


•	הפרש התאריכים בין תשובה חיובית להחלמה -14 יום.


•	עבור הטבלאות לקוחות ופרטים בנושא הקורונה בעת יצירת רשומה חדשה השרת מקבל את כל האובייקט. (במקומות שאפשר ללא ערך הערך כברירת המחדל הוא "")
