var express = require('express');
var app = express();


app.use('/', require('./routes'));


app.listen(5500, () => {
    console.log('Server is running on Port 5500');
});
