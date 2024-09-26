// controller
const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
// import all model's objects
const {Users} = require('../model')

// ================  Users ROUTER  ====================

routes.get('/Users', (req, res)=>{
    Users.fetchUsers(req, res)
})
routes.get('/user/:id', bodyParser.json(),(req, res)=>{
    Users.updateUser(req, res)
})
routes.post('/register', bodyParser.json(),
(req,res)=>{
    Users.register(req,res)
})
routes.put('/user/:id',bodyParser.json(),
(req,res)=>{
    Users.updateUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),
(req,res)=>{
    Users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    Users.deleteUser(req,res)
})
module.exports = {
    express, 
    routes
}
