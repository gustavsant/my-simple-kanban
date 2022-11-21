import { useEffect, useState } from 'react'
import { db } from './FireBaseConfig'
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

function App() {
  const [columns, setColumns] = useState([])
  const [newColumn, setNewColumn] = useState('')
  const columnsCollectionRef = collection(db, 'columns')

  useEffect(() => {
    async function GetColumns() {
      const data = await getDocs(columnsCollectionRef)
      setColumns(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    GetColumns()
  }, [])

  //create update delete
  async function HandleNewColumn() {
    await addDoc(columnsCollectionRef, { name: newColumn })
  }
  async function UpdateColumn(id, newname) {
    const columnDoc = doc(db, 'columns', id)
    const newColumnName = {
      name: newname,
    }
    await updateDoc(columnDoc, newColumnName)
  }
  async function DeleteColumn(id) {
    const columnToDel = doc(db, 'columns', id)
    await deleteDoc(columnToDel)
  }
  function CheckPrompt(id) {
    let newName = prompt('Digite o novo nome da coluna')
    if (newName) {
      console.log(newName, id)
      UpdateColumn(id, newName)
    }
  }
  const columnStyle = {
    border: '1px solid black',
    height: '300px',
    width: '200px',
  }
  return (
    <div style={{ display: 'flex' }}>
      {columns.map((column) => {
        return (
          <div style={columnStyle}>
            {column.name}
            <button
              onClick={() => {
                DeleteColumn(column.id)
              }}
            >
              Deletar
            </button>
            <button
              onClick={() => {
                CheckPrompt(column.id)
              }}
            >
              Editar
            </button>
          </div>
        )
      })}
      <input
        type="text"
        placeholder="nova coluna"
        onChange={(e) => {
          setNewColumn(e.target.value)
        }}
        style={{ height: '50px' }}
      />
      <button onClick={HandleNewColumn} style={{ height: '50px' }}>
        Add
      </button>
    </div>
  )
}

export default App
