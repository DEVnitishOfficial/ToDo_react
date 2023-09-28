import { useState } from 'react'
import ToDoLists from './components/ToDoLists'
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
    return [...oldItems , inputList]
  });
  setInputList("");
  }

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
    console.log("item deleted successfully");
  }

  return (
    <>
     <div className='bg-gray-500'>
      <div>
        <br />
        <h1 className='text-[30px] bg-cyan-500 text-white'>ToDo List</h1>
        <br />
        <input className='placeholder-black text-2xl bg-transparent outline-none border-2 border-black  rounded p-1' type=" text " placeholder='add item' onChange={displayItem} value={inputList} />
        <button className='w-11 h-11 rounded-full bg-green-400 m-5 ' onClick={itemLists} >+</button>

        <ol>
          {/* <li className='text-white'>{inputList}</li> */}
          {
          item.map( (itemVal, index) => {
          return <ToDoLists 
          key={index}
          id={index}
          text={itemVal} 
          onSelect={deleteItem}
         />;
          })
          }
        </ol>
      </div>
     </div>
    </>
  )
}

export default App
