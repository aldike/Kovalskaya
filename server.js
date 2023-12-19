const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require('./app/user/routes'))

app.listen(3000, () =>{
    console.log("Server is listening on PORT 3000");
})