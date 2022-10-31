import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebase'

export const createOne = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getAll = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
}

export const getByID = async (collectionName: string, id: string) => {
  const q = query(collection(db, collectionName), where('id', '==', id))
  const querySnapshot = await getDocs(q)
  let response = {}
  querySnapshot.forEach((doc) => {
    response = doc.data()
  })
  return response
}
