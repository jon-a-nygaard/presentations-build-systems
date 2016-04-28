// app.js
(function () {
    var arithmetic = window.Arithmetic,
        result = arithmetic.add(1, 1);
    document.getElementById('result').innerHTML = '1 + 1 = ' + result;
    document.body.className = "done";
}());