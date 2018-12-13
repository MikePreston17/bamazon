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

let {
    2: command,
    3: rest
} = process.argv;

command = command && command.toLowerCase();

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    if (command === "reset" || command === "-r") {
        initializeDb();
        console.log('Database seeded.')
        return 0;
    }

    promptUser();
})

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

function promptUser() {
    inquirer.prompt([{
        name: "id",
        message: "Id of the product?",
    }, {
        name: "limit",
        message: "How many?",
    }]).then(function (response) {
        let {
            id,
            limit
        } = response;

        getProduct(id, limit);
    })
}

function getProduct(id, requestedAmount) {
    let props = {
        item_id: id
    };

    connection.query("select * from products where ?", props, function (err, res) {
        if (err) throw err;
        console.table(res);

        let row = res[0];
        let {
            stock_quantity: inStock
        } = row;

        if (inStock < requestedAmount) {
            console.log("Aww, sorry! Out of those!")
            return;
        } else {
            inStock -= requestedAmount;
            updateProducts(id, inStock);
        }
    })
}

function updateProducts(id, count) {

    let props = [count, id];

    connection.query('update products set stock_quantity = ? where item_id = ?', props, function (err, res) {
        if (err) throw err;
        console.table(res);
    });
}

function deleteProduct(props) {
    connection.query("delete from products where ?", props, function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}