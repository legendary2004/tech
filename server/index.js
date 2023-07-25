import express from "express";
import cors from 'cors';
import mysql from 'mysql';
import dotenv from "dotenv";
import bodyParser from "body-parser";


dotenv.config({path: './.env'})

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: process.env.db_host, 
    name: process.env.db_user,
    pass: process.env.db_pass,
    database: process.env.db_name
})

db.connect(error => {
    if (error) {
        console.log("Cant connect");
    }
    else {
        console.log("Connected");
    }
})

app.post("/register", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.pass;
    const passwordRepeat = req.body.passRepeat;

    db.query("SELECT email FROM users WHERE email = ?", [email], (error, results) => {
        if (error) {
            res.send({
                message: error
            })
        }
        else if (results.length > 0) {
            res.send({
                message: "A user with that email already exists"
            })
        }
        else if (password != passwordRepeat) {
            res.send({
                message: "Passwords do not match"
            })
        }
        else {
            db.query("INSERT INTO users SET ?", {username: name, email: email, password: password}, (error, results) => {
                res.send({
                    message: "Succesfully registered"
                })
            })
        }
    })
})

app.post("/login", (req, res) => {
    const email = req.body.email
    const pass = req.body.pass

    db.query("SELECT * FROM users WHERE email = ? and password = ?", [email, pass], (error, results) => {
        if (error) {
            res.send({
                message: error
            })
        }
        else if (results.length == 0) {
            res.send({
                message: "Wrong username or password"
            })
        }
        else {
            res.send({
                message: "Succesfully logged in",
                user: results[0].username,
                isAdmin: results[0].isAdmin,
                isLoggedIn: true
            })
        }
    })
})

app.post("/products", (req, res) => {
    const name = req.body.name;
    const details = req.body.details;
    const price = req.body.price;
    const category = req.body.category;
    const img = req.body.formFile;
    const affect = req.body.affect;
    const id = req.body.id;

    db.query("SELECT name FROM products WHERE name = ?", [name], (error, results) => {
        if (error) {
            res.send({
                message: error
            })
        }
        else if (results.length > 0 && !affect) {
            res.send({
                message: "A product with that name already exists"
            })
        }
        
        else if (!affect){
            db.query("INSERT INTO products SET ?", {name: name, details: details, price: price, category: category, image: img}, (error, results) => {
                if (error) {
                    res.send({
                        message: error
                    })
                }
                else {
                    res.send({
                        message: "Product succesfully added to database"
                    })
                }
            })
        }

        else {
            db.query(`UPDATE products SET name="${name}",details="${details}",category="${category}",price="${price}",image="${img}" WHERE id="${id}"`, (error, results) => {
                if (error) {
                    console.log(error);
                }
                else {
                    res.send({
                        message: "Product succesfully updated"
                    })
                }
            })
        }
    })

    
})

app.post("/editProducts", (req, res) => {
    db.query("SELECT * FROM products ORDER BY category ASC", (error, results) => {
        res.send({
            products: results
        })
    })
})

app.post("/deleteProduct", (req, res) => {
    const id = req.body.id;
    const button = req.body.button

    db.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
        if (button === "Remove") {
            db.query("DELETE FROM products WHERE id = ?", [id], (error, results) => {
                res.send({
                    message: "Product succesfully deleted"
                })
            })
        }
        if (button === "Edit") {
            res.send({
                products: results
            })
        }
    })
    
})

app.post("/chooseProduct", (req, res) => {
    const id = req.body.id;

    db.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
        res.send({
            products: results
        })
    })
})

app.post("/orders", (req, res) => {
    const name = req.body.name
    const price = req.body.price
    const products = JSON.stringify(req.body.products)

    db.query("SELECT * FROM orders", (error, results) => {
        res.send({
            orders: results
        })
        if (name && price && products) {
            db.query("INSERT INTO orders SET ?", {name: name, 
                price: price, products: products})
        }
    })
    
})

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));