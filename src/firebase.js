import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAu1qArOvdviQHHHvZzXXARuSvuym7MhAI',
  authDomain: 'hacktivpress-adhityardt.firebaseapp.com',
  databaseURL: 'https://hacktivpress-adhityardt.firebaseio.com',
  projectId: 'hacktivpress-adhityardt',
  storageBucket: 'hacktivpress-adhityardt.appspot.com',
  messagingSenderId: '847239402638'
})

export const db = firebaseApp.database()
export const user = firebaseApp.auth()
export const storageRef = firebaseApp.storage()
// export const regPic = db.ref('Pictures')
// export const storageRef = firebaseApp.storage().ref(Number(new Date()).toString())
