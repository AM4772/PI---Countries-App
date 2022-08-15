# COUNTRIES APP

![countries-home](/Countries.PNG)


## About the App

This application was one of the requirements of **Henry's Full Stack Developer Bootcamp** using `only` the technologies taught during the course.

Technologies used:

![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)   
![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)  
![Redux](https://img.shields.io/badge/-Redux-333333?style=flat&logo=redux)  
![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)  
![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)  
![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)  
![Express](https://img.shields.io/badge/-Express-333333?style=flat&logo=express)  
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-333333?style=flat&logo=postgreSQL)   
![Sequelize](https://img.shields.io/badge/-Sequelize-333333?style=flat&logo=Sequelize)

The functionalities required to move on to the next instance in the bootcamp were: Landing page, Navbar, Search (by country name), Filter (by continent and touristic activity), Sorts (asc and desc), pagination, Create a touristic activity, Validations and a pleasant graphical UI. This link will take you to the web page: **[Countries App](https://pi-countries-app.vercel.app/  "Countries App")**, *let me know your comments and suggestions!*

<h3> 🤝🏻 &nbsp;Connect with Me </h3>

<p align="center">
<a href="https://www.linkedin.com/in/aldo-moro/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Aldo%20Moro-blue?style=flat-square&logo=linkedin"></a>
<a href="mailto:moro_bramanti@hotmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-moro_bramanti@hotmail.com-blue?style=flat-square&logo=outlook"></a>
</p>

⭐️ From [AM4772](https://github.com/AM4772)

## How to use it locally

If you clone this repository you will get two folders: `api` and `client`, where are located back-end and front-end code. You must create a `.env` into `api` folder and provide the following information inside of it:

    DB_USER=PostgresUser
    DB_PASSWORD=PostgresPassword
    DB_HOST=localhost
    DB_NAME=countries
    PORT=3001

Where `PostgresUser` and `PostgresPassword` mean your personal information to connect to Postgres. `DB_NAME` and `PORT` can be modified in case it is needed.

In order to finish the set up you must create a Postgres DB named `countries` (or the same name you put into de env document), where all generated data will be located.


