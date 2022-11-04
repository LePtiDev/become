import { db } from './firebase'
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore'

export const createById = async (collectionName: string, id: string, data?: any) => {
  try {
    await setDoc(doc(db, collectionName, id), data)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getByID = async (collectionName: string, id: string) => {
  try {
    const response = await getDoc(doc(db, collectionName, id))
    return response
  } catch (e) {
    console.log(e)
  }
}

export const updateByID = async (collectionName: string, id: string, data: any) => {
  try {
    await updateDoc(doc(db, collectionName, id), data)
  } catch (e) {
    console.log(e)
  }
}
