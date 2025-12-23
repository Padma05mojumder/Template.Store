let header=document.querySelector("header")
let names1=document.getElementsByClassName('text')
const darkmode=window.matchMedia("(prefers-color-scheme:dark)").matches
function applyMode(){
    if(darkmode){
        document.body.style.backgroundColor="rgb(2, 11, 66)"
        header.style.backgroundColor="rgba(5, 24, 99, 0.79)"
        section1.style.backgroundColor="rgba(5, 24, 99, 0.79)"
        for(let i=0;names1.length;i++){
    names1[i].style.color="white"
        }
    }
    else{
        document.body.style.backgroundColor="white"
        header.style.backgroundColor="white"
        section1.style.backgroundColor="white"
    }
}
applyMode(darkmode)
darkmode.addEventListener("change",(e)=>{
    applyMode(e.matches)
})