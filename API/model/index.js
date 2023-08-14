// import all modules
const Users = require('./users')
const Orders = require('./orders')
const Books = require('./books')
const bookAuthors = require('./bookAuthors')
//Export all objects

module.exports = {
    Users: new Users(),
}