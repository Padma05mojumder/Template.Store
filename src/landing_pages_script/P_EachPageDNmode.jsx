let names=document.querySelector('#text')
let header=document.querySelector("#introduction") 
const darkMode=window.matchMedia("(prefers-color-scheme:dark)").matches
function apply(dark){
    if(dark){
            document.body.style.backgroundColor="rgb(57, 24, 3)"
            header.style.backgroundColor="rgba(82, 34, 6, 0.79)"
            names.style.color="rgb(255, 154, 46)"
    }
    else{
        document.body.style.backgroundColor="white"
        names.style.color="rgba(0, 0, 0, 1)"
    }
}
apply(darkMode)
darkMode.addEventListener("change" ,(e)=>{
    apply(e.matches)
})