const mysql = require('mysql');
const fs = require('fs');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "birman",
    database: "bamazon",
    multipleStatements: true
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    initializeDb();
    promptUser();
})

function promptUser() {
    inquirer.prompt({
        name: "id",
        message: "Id of the product?",
    }).then(function (response) {
        console.log(response.id)
        readProducts(response.id);
    })
}

function initializeDb() {
    let seedText = fs.readFileSync('seed.sql').toString();
    let initText = fs.readFileSync('initialize.sql').toString();

    connection.query(initText, function (err) {
        if (err) throw err;
    });

    connection.query(seedText, function (err) {
        if (err) throw err;
    });

    //Protect against injection attacks
    connection.multipleStatements = false;
}

function readProducts(id) {
    let props = {
        item_id: id
    };
    connection.query("select * from products where ?", props, function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

// function readProducts() {
//     connection.query("select * from products", function (err, res) {
//         if (err) throw err;
//         console.table(res);
//     })
// }

function deleteProduct(props) {
    connection.query("delete from products where ?", props, function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}