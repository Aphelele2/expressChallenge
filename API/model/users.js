const db =  require('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/authenticateUser')
// import db from '../config'
class Users{
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status : res.statusCode,
                results
            })

        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ${req.params.id};  
        `
        db.query(query, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    login(req, res){

    }
    async register(req, res){
       const data = req.body
       // encrypt password
       data.userPassword = await hash(data.userPassword, 15)
       // payload(data coming from he user)
       const user = {
        emailAdd: data.emailAdd,
        userPassword: data.userPassword
       }
       // query
       const query = `
       INSERT INTO Users
       SET ?;
       `
       db.query(query,[data], (err)=>{
        if (err) throw err
        // create token
        let token = createToken(user)
        res.cookie("LegitUser", token, {
            maxAge : 3600000,
            httpOnly: true
        })
        res.json({
            status: res.statusCode,
            msg: "You are now registered"
        })
       })
    }
    updateUser(req, res){
        const query = `
        UPDATE FROM Users
        SET ?
        WHERE userID = ?
        `
        db.query(query, [req.body, req.params.id],(err)=>{
            if (err) throw err
            res.json({
                status: statusCode,
                msg: 'The user record has been updated.'
            })
        })

    }
    deleteUser(req, res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query, (err)=>{
            if (err) throw err
            res.json({
                status : statusCode,
                msg:'The user record has been deleted successfully'
            })

        })
    }
}
module.exports = Users