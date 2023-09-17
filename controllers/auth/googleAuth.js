
// **LOS IMPORTS TIENEN QUE SER POR LINKS PORQUE ESTOY USANDO JS PURO** 
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {firebaseConfig} from '../../app/firebaseConfig.js' //your firebase configuration file
    
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleButton = document.getElementById('googleLogin')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.getElementById('register'))
        modal.hide()
    } catch (error) {
        console.log(error)
    }

})

