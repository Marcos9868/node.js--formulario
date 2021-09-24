const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
//Routes
    // Form route
    app.get('/cad', function(req, res){
        res.render('form')
    }) 
    // Send form route
    app.post('/addform', function(req, res){
        res.send('Name: '+ req.body.title + ' Age: '+ req.body.age + ' Email: '+ req.body.email)
    })    

app.listen(8081, function(){
    console.log('Server running at port http://localhost:8081');
})
