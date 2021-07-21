let users = require('../models/User');

const signUp = (req, res) =>{
    let userEmail = req.body.email;
    let foundEmail = users.find((user) => user.email === userEmail);
    if(foundEmail){
        return res.send(`This email: ${userEmail}, has already been used by another user.`)
    }
    else if(req.body.password !== req.body.confirmPassword){
       return res.json('Password and confirmPassword, does not match')

    }
    else if (!req.body.email || !req.body.fullName || !req.body.password || !req.body.confirmPassword){
        res.json("All fields are required. You need to fill all")
    }
    else{
        let newUser = {
            id: users.length + 1,
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }
        users.push(newUser);
        return res.json(users)
    }
    

}
const signIn = (req, res) =>{
    let signInDetails = {
        email: req.body.email,
        password: req.body.password
    }
    let foundUser = users.find((user) =>{
        if(user.email === signInDetails.email && user.password === signInDetails.password){
            return user;
        }
    })
    if(!foundUser){
        res.json("You need sign-Up first, or make sure you type your email and password correctly and try again.")
    }
    
    return res.json(foundUser)

} 
const getUsers = (req, res) =>{
    return res.json(users)
}


module.exports = { signUp, signIn, getUsers }