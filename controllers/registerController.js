const {initializeApp} = require('firebase/app')
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const {firebaseConfig} = require('../app/firebaseConfig') //your firebase configuration file

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const register = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        console.log(email, password)
        const userCredentials = createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
            console.log("Registered with credentials: ", userCredentials);
            return res.redirect('/');
        })
    } catch (error) {
        console.log(error)
    }

}

module.exports = register;