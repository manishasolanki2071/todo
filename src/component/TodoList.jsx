import DeleteTaskIcon from "./DeleteTaskIcon"

export default function 
TodoList({ data }) {
    return (
        <>
        
        {
            data.map((e)=>
                <div className="flex justify-center">
                    <div className={`w-96 flex items-center justify-between p-2 rounded-xl m-2 text-white ${e.status ? "bg-green-500" : "bg-red-500"}`}>
                        <div className="ml-2">{e.task}-{e.time}</div>
                        <div className="mr-2">
                            {
                                e.status ? <i className="fa fa-check ml-2" aria-hidden="true"></i> :
                                <i className="fa fa-close ml-2" aria-hidden="true"></i>
                                
                            }
                            {
                                e.status && <i className="fa fa-trash ml-2" aria-hidden="true"></i> 
                            }
                            {/* <DeleteTaskIcon hidden={e.status} /> */}

                        </div>

                    </div>
                </div>
            )
                


        }   


        </>
    )
    
}