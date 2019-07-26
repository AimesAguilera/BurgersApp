
// THE ORM IS USED TO TAKE CONDITIONS/INPUTS AND CHANGE
// THEM INTO SQL DATABASE COMMANDS.
var connection = require('./connection');

function produceQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}


function objectToSQL(obj) {
    // EX: column1=value1, column2=value2
    var arr = [];

    for (var key in obj) {
        arr.push(key + '=' + obj[key]);
    }
    return arr.toString();
}


var orm = {
    all: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += produceQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objectToSQL(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        var queryString = ' DELETE FROM ' + table;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }

};


module.exports = orm;