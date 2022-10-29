import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

//======================================================================= Signin

// Email
export const signinEmail = (form: any) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential: any) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((error: any) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}
