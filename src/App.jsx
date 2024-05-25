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

  const filterList = (filterByText) => {
    switch (filterByText) {
      case "All":
        setListOfTask(tasks)
        break;
      case "Completed":
        setListOfTask(tasks.filter((item) => item.status))
        break;
      case "Incompleted":
        setListOfTask(tasks.filter((item) => !item.status))
        break;
      default:
        setListOfTask(tasks)
        break;
    }
  }

  return (
    <div className="bg-gray-600 md:mx-64 md:my-28">
      <div className="text-center ">
        <input className="my-4 rounded-md p-2 mr-2" type = "text" placeholder="New Task"></input>
        <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-800">Add</button>
      </div>

      <div className=" my-6 flex justify-center">

        <div onClick={()=>{filterList("All")}}>
          <MyButton text="All" cl="bg-blue-500" />
        </div>

        <div onClick={()=>{filterList("Completed")}}>
          <MyButton text="Completed" cl="bg-green-500" />
        </div>

        <div onClick={()=>{filterList("Incompleted")}}>
          <MyButton text="Incompleted" cl="bg-red-500" />
        </div>

      </div>

      

      <TodoList data={listOfTasks} />
      
    </div>
  )
}