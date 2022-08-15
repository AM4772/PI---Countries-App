# COUNTRIES APP

![countries-home](/Countries.PNG)


## About the App

This application was one of the requirements of **Henry's Full Stack Developer Bootcamp**. We were **`only`** allowed to use the technologies taught during the course.

Technologies used:

![JavaScript](https://img.shields.io/badge/-JavaScript-696969?style=flat&logo=javascript)   
![React](https://img.shields.io/badge/-React-696969?style=flat&logo=react)  
![Redux](https://img.shields.io/badge/-Redux-696969?style=flat&logo=redux)  
![HTML5](https://img.shields.io/badge/-HTML5-696969?style=flat&logo=HTML5)  
![CSS](https://img.shields.io/badge/-CSS-696969?style=flat&logo=CSS3&logoColor=1572B6)  
![Node.js](https://img.shields.io/badge/-Node.js-696969?style=flat&logo=node.js)  
![Express](https://img.shields.io/badge/-Express-696969?style=flat&logo=express)  
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-696969?style=flat&logo=postgreSQL)   
![Sequelize](https://img.shields.io/badge/-Sequelize-696969?style=flat&logo=Sequelize)  
  ![Git](https://img.shields.io/badge/-Git-696969?style=flat&logo=git)  
  ![GitHub](https://img.shields.io/badge/-GitHub-696969?style=flat&logo=github)

The functionalities required to move on to the next instance in the bootcamp were: Landing page, Navbar, Search (by country name), Filter (by continent and touristic activity), Sorts (asc and desc), pagination, Create a touristic activity, Validations and a pleasant graphical UI. This link will take you to the web page: **[Countries App](https://pi-countries-app.vercel.app/  "Countries App")**, *let me know your comments and suggestions!*

PS: I will continue improving it and adding more functionalities.

<h3> 🤝🏻 &nbsp;Connect with Me </h3>

<p align="center">
<a href="https://www.linkedin.com/in/aldo-moro/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Aldo%20Moro-blue?style=flat-square&logo=linkedin"></a>
<a href="mailto:moro_bramanti@hotmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-moro_bramanti@hotmail.com-blue?style=flat-square&logo=outlook"></a>
</p>

⭐️ From [AM4772](https://github.com/AM4772)

## How to use it locally

- You must install in your computer:
    - A text editor like **`Visual Studio Code`** or **`Sublime`**, etc.
    - **`Git`**, link to instructions: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Instructions Git")
    - **`PostgreSQL`**, link to instructions: [PostgreSQL](https://www.postgresql.org/download/ "Instructions PostgreSQL")
- Up to the right of this page, you will see a green button named "Code". Click on it and copy the HTTPS address to this repository.
- In your text editor, place the cursor in the desired folder, paste the HTTPS address and hit Enter. This will download the repository to your computer. You will see the same folder structure and files as you see at the top of this page. Next, run the following commands inside the folder `npm install` and then `npm init`.
- Now you must install all the required dependencies for the front-end and back-end:
    - Front-end: place cursor inside `client`folder and run the following command:
    ```bash
        npm install axios dotenv-webpack react react-dom react-router-dom react-scripts react-select redux redux-thunk web-vitals 
    ```
    - Back-end: place cursor inside `api`folder and run the following command:
    ```bash
        npm install axios body-parser cookie-parser cors dotenv express morgan index.js nodemon pg pg-hstore sequelize chai mocha supertest supertest-session node
    ```
- In the `api` folder, create a `.env` file with the following content:
    ```javascript
        DB_USER=postgres
        DB_PASSWORD=`your PostgreSQL password` // this is the one you created when downloading the software
        DB_HOST=localhost
        DB_NAME=countries
        PORT=3001
    ```
- In ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-696969?style=flat&logo=postgreSQL), you must create a new database named **countries**.
- The content inside the `client` folder was created using **`Create React App`**.
- To run the app in your localhost, first run the command `npm start` from the `api` folder and then do the same from the `client` folder. This should open up a browser where you will see the app running.

### 🤝🏻 &nbsp;Contact me if you have any problems with my instructions
