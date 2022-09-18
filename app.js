const express = require('express')
const mongoose = require('mongoose')

const app = express();

// GET : http://localhost:3000/cruds
// GET : http://localhost:3000/cruds/<id>
// POST : http://localhost:3000/cruds
// PATCH : http://localhost:3000/cruds/<id>



mongoose.connect('mongodb://localhost/CRUD_OperationDB')



const con = mongoose.connection
con.on('open', function(){
    console.log("Database is Connected Successfully")
})

app.use(express.json())

const  crudRouter = require('./router/cruds')
app.use('/cruds', crudRouter);


app.listen(3000, function(){
    console.log("Server is Running on the Port 3000");
})