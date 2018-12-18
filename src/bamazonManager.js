const Table = require('cli-table');
const table = new Table();

connection.query("select * from products where ?", props, function (err, res) {
    if (err) throw err;
    console.table(res);
});