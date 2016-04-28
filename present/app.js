// app.js
var arithmetic = require('./arithmetic');
var result = arithmetic.add(2, 2);
document.getElementById('result').innerHTML = '2 + 2 = ' + result;
document.body.className = "done";