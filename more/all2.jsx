import Ppt from "../ppt_template.jsx"
import { createRoot } from "react-dom/client";
let section1=document.querySelector("#section1")
let header=document.querySelector("header")
let names1=document.getElementsByClassName('.text')
const section=createRoot(section1)
if(document.title==="Data Visualization Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_data/data1.html"
            img="/src/p_data/data1.jpg"
            name="Data Visualization template 1"
        />
        <Ppt
            link="/src/p_data/data2.html"
            img="/src/p_data/data2.jpg"
            name="Data Visualization template 2"
        />
        <Ppt
            link="/src/p_data/data3.html"
            img="/src/p_data/data3.jpg"
            name="Data Visualization template 3"
        />
        <Ppt
            link="/src/p_data/data4.html"
            img="/src/p_data/data4.jpg"
            name="Data Visualization template 4"
        />  
    </>
)}
if(document.title==="Infographics Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_info/info1.html"
            img="/src/p_info/info1.jpg"
            name="Infographics Template 1"
        />
        <Ppt
            link="/src/p_info/info2.html"
            img="/src/p_info/info2.jpg"
            name="Infographics Template 2"
        />
        <Ppt
            link="/src/p_info/info3.html"
            img="/src/p_info/info3.jpg"
            name="Infographics Template 3"
        />
        <Ppt
            link="/src/p_info/info4.html"
            img="/src/p_info/info4.jpg"
            name="Infographics Template 4"
        />   
    </>
)}
if(document.title==="Lecture and Lesson Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_lecture/lecture1.html"
            img="/src/p_lecture/lecture1.jpg"
            name="Lectures and Lesson Template 1"
        />
        <Ppt
            link="/src/p_lecture/lecture2.html"
            img="/src/p_lecture/lecture2.jpg"
            name="Lectures and Lesson Template 2"
        />
        <Ppt
            link="/src/p_lecture/lecture3.html"
            img="/src/p_lecture/lecture3.jpg"
            name="Lectures and Lesson Template 3"
        />
        <Ppt
            link="/src/p_lecture/lecture4.html"
            img="/src/p_lecture/lecture4.jpg"
            name="Lectures and Lesson Template 4"
        />  
    </>
)}
if(document.title==="Marketing and Sales Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_market/market1.html"
            img="/src/p_market/market1.jpg"
            name="Marketing and Sales Template 1"
        />
        <Ppt
            link="/src/p_market/market2.html"
            img="/src/p_market/market2.jpg"
            name="Marketing and Sales Template 2"
        />
        <Ppt
            link="/src/p_market/market3.html"
            img="/src/p_market/market3.jpg"
            name="Marketing and Sales Template 3"
        />
        <Ppt
            link="/src/p_market/market4.html"
            img="/src/p_market/market4.jpg"
            name="Marketing and Sales Template 4"
        />
    </>
)}
if(document.title==="Corporate Meeting Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_meeting/meeting1.html"
            img="/src/p_meeting/meeting1.jpg"
            name="Corporate Meeting Template 1"
        />
        <Ppt
            link="/src/p_meeting/meeting2.html"
            img="/src/p_meeting/meeting2.jpg"
            name="Corporate Meeting Template 2"
        />
        <Ppt
            link="/src/p_meeting/meeting3.html"
            img="/src/p_meeting/meeting3.jpg"
            name="Corporate Meeting Template 3"
        />
        <Ppt
            link="/src/p_meeting/meeting4.html"
            img="/src/p_meeting/meeting4.jpg"
            name="Corporate Meeting Template 4"
        /> 
    </>
)}
if(document.title==="Digital Portfolio Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_portfolio/portfolio1.html"
            img="/src/p_portfolio/portfolio1.jpg"
            name="Digital Portfolio Template 1"
        />
        <Ppt
            link="/src/p_portfolio/portfolio2.html"
            img="/src/p_portfolio/portfolio2.jpg"
            name="Digital Portfolio Template 2"
        />
        <Ppt
            link="/src/p_portfolio/portfolio3.html"
            img="/src/p_portfolio/portfolio3.jpg"
            name="Digital Portfolio Template 3"
        />
        <Ppt
            link="/src/p_portfolio/portfolio4.html"
            img="/src/p_portfolio/portfolio4.jpg"
            name="Digital Portfolio Template 4"
        />
    </>
)}
if(document.title==="Project Management Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_project/project1.html"
            img="/src/p_project/project1.jpg"
            name="Project Management Template 1"
        />
        <Ppt
            link="/src/p_project/project2.html"
            img="/src/p_project/project2.jpg"
            name="Project Management Template 2"
        />
        <Ppt
            link="/src/p_project/project3.html"
            img="/src/p_project/project3.jpg"
            name="Project Management Template 3"
        />
        <Ppt
            link="/src/p_project/project4.html"
            img="/src/p_project/project4.jpg"
            name="Project Management Template 4"
        />  
    </>
)}
if(document.title==="Student Assignment Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_student/student1.html"
            img="/src/p_student/student1.jpg"
            name="Student Assignment Template 1"
        />
        <Ppt
            link="/src/p_student/student2.html"
            img="/src/p_student/student2.jpg"
            name="Student Assignment Template 2"
        />
        <Ppt
            link="/src/p_student/student3.html"
            img="/src/p_student/student3.jpg"
            name="Student Assignment Template 3"
        />
        <Ppt
            link="/src/p_student/student4.html"
            img="/src/p_student/student4.jpg"
            name="Student Assignment Template 4"
        /> 
    </>
)}
if(document.title==="Training and Development Templates"){
section.render(
    <>
        <Ppt
            link="/src/p_training/training1.html"
            img="/src/p_training/training1.jpg"
            name="Development Template 1"
        />
        <Ppt
            link="/src/p_training/training2.html"
            img="/src/p_training/training2.jpg"
            name="Development Template 2"
        />
        <Ppt
            link="/src/p_training/training3.html"
            img="/src/p_training/training3.jpg"
            name="Development Template 3"
        />
        <Ppt
            link="/src/p_training/training4.html"
            img="/src/p_training/training4.jpg"
            name="Development Template 4"
        />
    </>
)}
const darkmode=window.matchMedia("(prefers-color-scheme:dark)").matches
function applyMode(){
    if(darkmode){
        document.body.style.backgroundColor="rgb(57, 24, 3)"
        header.style.backgroundColor="rgba(82, 34, 6, 0.79)"
        section1.style.backgroundColor="rgba(82, 34, 6, 0.79)"
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