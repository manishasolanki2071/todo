export default function MyButton({text,cl}) {
    return(
        <button className={`rounded-xl px-4 mx-2 h-10 ${cl}`}>
            {text}
        </button> 
    )
}