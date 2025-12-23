let header=document.querySelector("header")
let names1=document.getElementsByClassName('.text')
const darkmode=window.matchMedia("(prefers-color-scheme:dark)").matches
function applyMode(){
    if(darkmode){
        document.body.style.backgroundColor="rgb(3, 35, 5)"
        header.style.backgroundColor="rgba(3, 55, 11, 1)"
        section1.style.backgroundColor="rgba(3, 55, 11, 1)"
        for(let i=0;i<names1.length;i++){
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