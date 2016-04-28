// app.js
import arithmetic from './arithmetic.js';
var result = arithmetic.add(3, 3);
document.getElementById('result').innerHTML = '3 + 3 = ' + result;
document.body.className = "done";