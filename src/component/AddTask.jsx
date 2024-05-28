import { useState } from "react"
export default function AddTask({add}) {

    const [inputTask, setInputTask] = useState()

    const changeInputVal = (e) => {
        setInputTask(e.target.value)
    }

    const addTask = () => {
        add({
            task: inputTask,
            time: `${new Date().getHours()}: ${new Date().getMinutes()}`,
            status: false
        })
        setInputTask("")
        
    }

    return(
        <div className="text-center ">
          <input value={inputTask} onChange={changeInputVal} className="my-4 rounded-md p-2 mr-2" type = "text" placeholder="New Task"></input>
          <button onClick = {addTask} className="bg-blue-600 p-2 rounded-md hover:bg-blue-800">Add</button>
        </div>
    )
}