import { useState } from 'react'
import MyButton from "./component/MyButton";
import TodoList from "./component/TodoList";

let tasks = [
  {
    task: "first",
    time: "7 Am",
    status: false

  },
  {
    task: "second",
    time: "9 Am",
    status: true

  },
  {
    task: "third",
    time: "8 Am",
    status: false

  }

]

export default function App() {
  
  const [listOfTasks, setListOfTask] = useState(tasks)

  const filterList = (status) => {
    setListOfTask(tasks.filter((e) => status == undefined ? true : status == e.status))
  }

  return (
    <div className="bg-gray-600 md:mx-64 md:my-28">
      <div className="text-center ">
        <input className="my-4 rounded-md p-2 mr-2" type = "text" placeholder="New Task"></input>
        <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-800">Add</button>
      </div>

      <div className=" my-6 flex justify-center">

        <div onClick={()=>{filterList()}}>
          <MyButton text="All" cl="bg-blue-500" />
        </div>

        <div onClick={()=>{filterList(true)}}>
          <MyButton text="Completed" cl="bg-green-500" />
        </div>

        <div onClick={()=>{filterList(false)}}>
          <MyButton text="Incompleted" cl="bg-red-500" />
        </div>

      </div>

      

      <TodoList data={listOfTasks} />
      
    </div>
  )
}