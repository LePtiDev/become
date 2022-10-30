import { auth } from './firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { createOne } from './data'
import { animation } from './animation'

//======================================================================= Login

// Email
export const signinEmail = (form: any) => {
  signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential: any) => {
      const user = userCredential.user
      animation('home', 'slide-left')
    })
    .catch((error: any) => {})
}

// Google
export const signinGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      animation('home', 'slide-left')
    })
    .catch((error) => {})
}

//======================================================================= Register

// Email
export const signupEmail = (form: any) => {
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential: any) => {
      const user = userCredential.user
      createOne('users', { id: user.uid })
      animation('home', 'slide-left')
    })
    .catch((error: any) => {})
}
