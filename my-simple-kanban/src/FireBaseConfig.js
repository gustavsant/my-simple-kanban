import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCKyyrw47F576vpA2GwG9G0C32NGo4DQ9o',
  authDomain: 'my-kanban-8ab63.firebaseapp.com',
  projectId: 'my-kanban-8ab63',
  storageBucket: 'my-kanban-8ab63.appspot.com',
  messagingSenderId: '402179253011',
  appId: '1:402179253011:web:1da52ece8b8e21ace330e6',
  measurementId: 'G-EGHHJ7P94P',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
