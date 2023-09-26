import { useState } from 'react'
import './App.css'

function App() {
  const [inputList, setInputList] = useState("add something here")
  const [item, setItems] = useState([])

  // writing methods
  const displayItem = (event) => {
  setInputList(event.target.value)
  }

  const itemLists = () => {
  setItems((oldItems) => {
    return [...oldItems, inputList]
  })
  }

  return (
    <>
     <div className='bg-slate-600'>
      <div>
        <br />
        <h1 className='text-[30px] bg-cyan-500 text-white'>ToDo List</h1>
        <br />
        <input className='placeholder-green-500 text-2xl' type=" text " placeholder='add item' onChange={displayItem} />
        <button className='w-16 h-16 rounded-full bg-green-400' onClick={itemLists}>+</button>

        <ol>
          {/* <li className='text-white'>{inputList}</li> */}
          {
          item.map( (itemVal) => {
            return <li>{itemVal}</li>
          })
          }
        </ol>
      </div>
     </div>
    </>
  )
}

export default App
