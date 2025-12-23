export default function Word(props){
    return(
        <div className="frame">
               <a href={props.link}>
                <img className="images" src={props.img}></img>
               </a>
                <p className="text" >{props.name}</p>
        </div>
    )
}

