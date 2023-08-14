// controller
const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
// import all model's objects
const {users} = require('../model')

// ================  USERS ROUTER  ====================

routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
})
routes.post('/register', bodyParser.json(),
(req,res)=>{
    users.register(req,res)
})
routes.put('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})
module.exports = {
    express, 
    routes
}
