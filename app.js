require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//HBS

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs')

// Servir contenido estarico

app.use(express.static('public') );

app.use('/', (req, res) => {
    res.render('home', {
      nombre: 'pipi',
      titulo: 'football'
    });
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo');
  });

  app.get('/football', function (req, res) {
    res.sendFile(__dirname + 'football');
  });

  app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/generic.html');
  });

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
  });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})