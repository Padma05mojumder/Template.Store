export default function Exc(props){
    return(
        <div className="frame1">
            <a href={props.link}>
                <img className="images1" src={props.img}></img>
            </a>
                <p className="text"  key={props.link}>{props.name}</p>
        </div>
    )
}
