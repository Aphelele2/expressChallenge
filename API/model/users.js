const db =  require('../config')
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
    register(req, res){

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