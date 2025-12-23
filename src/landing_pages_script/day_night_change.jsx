let header=document.querySelector("header")//selecting header
let footer=document.querySelector("footer")//selecting footer
let Hcontainer=document.querySelector("#header_container")
const darkMode=window.matchMedia("(prefers-color-scheme:dark)")
const mode=darkMode.matches
function apply(dark){
    if(dark){
        if(document.title=="word template"){
            document.body.style.backgroundColor="rgb(2, 11, 66)"
            header.style.backgroundColor="rgba(5, 24, 99, 0.79)"
            footer.style.backgroundColor="rgba(5, 25, 69, 1)"
            Hcontainer.style.backgroundColor="rgb(2, 11, 66)"}
        else if(document.title=="excel template"){
            document.body.style.backgroundColor="rgb(3, 35, 5)"
            header.style.backgroundColor="rgba(3, 55, 11, 1)"
            footer.style.backgroundColor="rgba(2, 59, 13, 1)"
            Hcontainer.style.backgroundColor="rgb(3, 35, 5)"
        }
        else{
            document.body.style.backgroundColor="rgb(57, 24, 3)"
            header.style.backgroundColor="rgba(82, 34, 6, 0.79)"
            footer.style.backgroundColor="rgba(67, 35, 4, 1)"
            Hcontainer.style.backgroundColor="rgb(57, 24, 3)"
        }
        }
    else{
        document.body.style.backgroundColor="white"
        header.style.backgroundColor="rgba(255, 255, 255, 1)"
        footer.style.backgroundColor="rgba(255, 255, 255, 1)"
    }
}
apply(mode)
darkMode.addEventListener("change" ,(event)=>{
    apply(event.matches)
})