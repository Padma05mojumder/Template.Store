let names=document.querySelector('#text')
let header=document.querySelector("#introduction") 
const darkMode=window.matchMedia("(prefers-color-scheme:dark)").matches
function apply(dark){
    if(dark){
            document.body.style.backgroundColor="rgb(3, 35, 5)"
            header.style.backgroundColor="rgba(3, 55, 11, 1)"
            names.style.color="rgba(40, 245, 84, 1)"
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