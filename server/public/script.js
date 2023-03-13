import db from "../router/mysql.js";

document.getElementById('removeItem').addEventListener('click', function(req, res) {
    db.query('SELECT * FROM products', (error, results) => {
        console.log(results)
    })
})