import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

//======================================================================= Signin

// Email
export const signinEmail = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
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
