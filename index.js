var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
})

app.get('/icecreams',(req,res)=>{
    res.json([
        {
            id:1,
            name:"Vanilla"
        },
        {
            id:2,
            name:"Chocolate"
        },
    ])
})

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
