const express = require("express")
const app = express()
const bcrypt = require('bcrypt') //Importing bcrypt package
const sqlite = require('sqlite3')
const db = new sqlite.Database('userxpass.db');
const { JSDOM } = require('jsdom');
const axios = require('axios');

db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');

app.use(express.urlencoded({extended: false}))



app.post("/signup", async (req, res) => {
    var name = req.body.username;
    var password = req.body.password;
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [name, password], (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Data entered successfully");
          res.redirect('/signin')
        }
      });
    });

app.post("/signin", (req, res) => {
    var name = req.body.username;
    var password = req.body.password;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [name, password], (err, row) => {
        if (err) {
          console.error(err);
          console.log(err);
        } else {
          if (row) {
            console.log("Username and password match: ", row);
            res.redirect('/main')
          } else {
            console.log('Username and password do not match');
            res.redirect('/signin')
          }
        }
      });
    });

const users = []

app.get('/styles/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/styles/styles.css');
});

app.get('/styles/animelist.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/styles/animelist.css')
});

app.get('/styles/mainstyle.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/styles/mainstyle.css')
});

app.get('/styles/signstyle.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/styles/signstyle.css');
});

app.get('/styles/signstyles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/styles/signstyles.css');
});

app.get('/img/img1.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/img1.jpg');
});

app.get('/img/1.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/1.jpg');
});

app.get('/img/2.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/2.jpg');
});

app.get('/img/3.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/3.jpg');
});

app.get('/img/4.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/4.jpg');
});

app.get('/img/5.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/5.jpg');
});

app.get('/img/6.jpg', (req, res) => {
    res.setHeader('Content-Type', 'img/jpg');
    res.sendFile('C:/Users/Tomura Shigaraki/Desktop/AnimeSite4(db)' + '/img/6.jpg');
});


app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/signin', (req, res) => {
    res.render("signin.ejs")
})

app.get('/signup', (req, res) => {
    res.render("signup.ejs")
})

app.get('/main', (req, res) => {
    res.render("home.ejs")
})

app.get('/animelist', (req, res) => {
    res.render("animelist.ejs")
})



app.listen(3000)


