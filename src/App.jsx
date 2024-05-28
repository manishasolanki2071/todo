import { useState } from 'react'
import MyButton from "./component/MyButton";
import TodoList from "./component/TodoList";
import AddTask from './component/AddTask';


// let tasks = [
//   {
//     task: "first",
//     time: "7 Am",
//     status: false

//   },
//   {
//     task: "second",
//     time: "9 Am",
//     status: true

//   },
//   {
//     task: "third",
//     time: "8 Am",
//     status: false

//   }

export default function App() {
  
  const [listOfTasks, setListOfTask] = useState([])

  const filterList = (status) => {
    setListOfTask(tasks.filter((e) => status == undefined ? true : status == e.status))
  }

  function addTask(newTask){
    listOfTasks.push(newTask)
    setListOfTask([...listOfTasks])
  }

  return (
    <div className="bg-gray-600 md:mx-64 md:my-28">
      
      <AddTask add={addTask}/>

      <div className=" py-6 flex justify-center">
          <MyButton text="All" color="bg-blue-500" filter = {()=>{filterList()}} />
              
          <MyButton text="Completed" color="bg-green-500" filter = {()=>{filterList(true)}} />
                
          <MyButton text="Incompleted" color="bg-red-500" filter= {() => {filterList(false)}} />
      </div>

      

      <TodoList data={listOfTasks} />
      
    </div>
  )
}