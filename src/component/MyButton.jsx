export default function MyButton({text,color,filter}) {
    return(
        <button className={`rounded-xl px-4 mx-2 h-10 ${color}`} onClick={filter}>
            {text}
        </button> 
    )
}