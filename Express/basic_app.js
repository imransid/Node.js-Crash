var express = require('express');

var app = express();

app.set('view engine', 'ejs');

// GET
// POST
// PUT
// DELETE

app.get('/', function(req, res){
    res.send('This is Index Route')
})

// Parms Passing

var name = {
    1 : 'Imran',
    2 : 'Jisan',
    3 : 'Nisan'
}


app.get('/students/:id', function(req, res){
    res.render('students', {name: name[req.params.id], id: req.params.id})
})

app.listen(3000, () => console.log('Our Server is Run 3000 Port'))