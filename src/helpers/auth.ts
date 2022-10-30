import { auth } from './firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

//======================================================================= Login

// Email
export const signinEmail = (form: any) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential: any) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error: any) => {})
}

// Google
export const signinGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      // User info
      const user = result.user
      console.log(user)
    })
    .catch((error) => {})
}

//======================================================================= Register
