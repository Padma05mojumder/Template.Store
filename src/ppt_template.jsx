export default function Ppt(props){
    return(
        <div className="frame">
            <a href={props.link}>
                <img className="images" src={props.img}></img>
            </a>
                <p className="text"  key={props.link}>{props.name}</p>
        </div>
    )
}
