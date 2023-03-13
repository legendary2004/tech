let express = require('express');

let app = express();

app.set('view-engine', 'ejs');

app.get('/', (rep, res) => {
    res.render('index.ejs')
})

app.get('/login', (rep, res) => {
    res.render('login.ejs')
})

app.get('/register', (rep, res) => {
    res.render('register.ejs')
})

app.listen(`http://localhost:3000`);

