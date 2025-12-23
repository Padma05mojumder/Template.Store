let names=document.querySelector('#text')
let header=document.querySelector("#introduction") 
const darkMode=window.matchMedia("(prefers-color-scheme:dark)").matches
function apply(dark){
    if(dark){
            document.body.style.backgroundColor="rgb(2, 11, 66)"
            header.style.backgroundColor="rgba(5, 24, 99, 0.79)"
            names.style.color="rgba(40, 88, 245, 1)"
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