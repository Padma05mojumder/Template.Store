import Word from "../word_template";
import { createRoot } from "react-dom/client";
let section1=document.querySelector("#section1")
let header=document.querySelector("header")
let names1=document.getElementsByClassName('.text')
const section=createRoot(section1)
if(document.title==="Resume Templates"){
section.render(
<>
    <Word
        link="/src/resume_template_webpages/resume_template1.html"
        img="/src/resume template/resume template.jpg"
        name="Resume template 1"
    />
    <Word
        link="/src/resume_template_webpages/resume_template2.html"
        img="/src/resume template/resume template 1.jpg"
        name="Resume template 2"
    />
    <Word
        link="/src/resume_template_webpages/resume_template3.html"
        img="/src/resume template/resume template 2.jpg"
        name="Resume template 3"
    />
    <Word
        link="/src/resume_template_webpages/resume_template4.html"
        img="/src/resume template/resume template 3.jpg"
        name="Resume template 4"
    />  
</>
)}
if(document.title=="Dissertation Templates"){
section.render(
    <>
        <Word
            link="/src/dissertation_webpage/dissertation1.html"
            img="/src/dissertation template/dissertation template 1.jpg"
            name="Dissertation template 1"
        />
        <Word
            link="/src/dissertation_webpage/dissertation2.html"
            img="/src/dissertation template/dissertation template 2.jpg"
            name="Dissertation template 2"
        />
        <Word
            link="/src/dissertation_webpage/dissertation3.html"
            img="/src/dissertation template/dissertation template 3.jpg"
            name="Dissertation template 3"
        />
        <Word
             link="/src/dissertation_webpage/dissertation4.html"
             img="/src/dissertation template/dissertation template 3.jpg"
             name="Dissertation template 4"
        /> 

    </>
)}
if(document.title==="Essay Templates"){
section.render(
    <>
       <Word
            link="/src/essay_webpage/essay1.html"
            img="/src/essay template/essay template 1.jpg"
            name="Essay template 1"
        />
        <Word
            link="/src/essay_webpage/essay2.html"
            img="/src/essay template/essay template 2.jpg"
            name="Essay template 2"
        />
        <Word
            link="/src/essay_webpage/essay3.html"
            img="/src/essay template/essay template 3.jpg"
            name="Essay template 3"
        />
        <Word
            link="/src/essay_webpage/essay4.html"
            img="/src/essay template/essay template 4.jpg"
            name="Essay template 4"
        />

    </>
)}
if(document.title==="Report Templates"){
section.render(
<>
 <Word
      link="/src/report_template_webpages/report_template1.html"
      img="/src/report template/business report template.jpg"
      name="Business Report template"
    />
    <Word
       link="/src/report_template_webpages/report_template2.html"
       img="/src/report template/incident report template.jpg"
       name="Incident Report template"
    />
    <Word
        link="/src/report_template_webpages/report_template3.html"
        img="/src/report template/progress report template.jpg"
        name="Progress Report template"
            />
    <Word
        link="/src/report_template_webpages/report_template4.html"
        img="/src/report template/research report template.jpg"
        name="Research Report template"
    />   
</>
    )}
if(document.title==="Business Letter Templates"){
section.render(
        <>
            <Word
                link="/src/business_letter_webpage/business_letter1.html"
                img="/src/business letter template/business letter template1.jpg"
                name="Business Letter template 1"
            />
            <Word
                link="/src/business_letter_webpage/business_letter2.html"
                img="/src/business letter template/business letter template2.jpg"
                name="Business Letter template 2"
            />
            <Word
                link="/src/business_letter_webpage/business_letter3.html"
                img="/src/business letter template/business letter template3.jpg"
                name="Business Letter template 3"
            />
            <Word
                link="/src/business_letter_webpage/business_letter4.html"
                img="/src/business letter template/business letter template4.jpg"
                name="Business Letter template 4"
            />  
        </>
)}
if(document.title==="Business Proposal Templates"){
    section.render(
        <>
            <Word
                link="/src/business_proposal_webpage/business_proposal1.html"
                img="/src/business proposal template/business proposal template 1.jpg"
                name="Business Proposal template 1"
            />
            <Word
                link="/src/business_proposal_webpage/business_proposal2.html"
                img="/src/business proposal template/business proposal template 2.jpg"
                name="Business Proposal template 2"
            />
            <Word
                link="/src/business_proposal_webpage/business_proposal3.html"
                img="/src/business proposal template/business proposal template 3.jpg"
                name="Business Proposal template 3"
            />
            <Word
                link="/src/business_proposal_webpage/business_proposal4.html"
                img="/src/business proposal template/business proposal template 4.jpg"
                name="Business Proposal template 4"
            />
        </>
    )}
if(document.title==="Newsletter Templates"){
    section.render(
        <>
            <Word
                link="/src/newsletter_webpage/newsletter1.html"
                img="/src/newsletter template/newsletter template 1.jpg"
                name="Newsletter template 1"
            />
            <Word
                link="/src/newsletter_webpage/newsletter2.html"
                img="/src/newsletter template/newsletter template 2.jpg"
                name="Newsletter template 2"
            />
            <Word
                link="/src/newsletter_webpage/newsletter3.html"
                img="/src/newsletter template/newsletter template 3.jpg"
                name="Newsletter template 3"
            />
            <Word
                link="/src/newsletter_webpage/newsletter4.html"
                img="/src/newsletter template/newsletter template 4.jpg"
                name="Newsletter template 4"
            />  
        </>
    )}
if(document.title==="Research Templates"){
    section.render(
        <>
            <Word
                link="/src/research_webpage/research1.html"
                img="/src/research paper template/research template 1.jpg"
                name="Research Paper template 1"
            />
            <Word
                link="/src/research_webpage/research2.html"
                img="/src/research paper template/research template 3.jpg"
                name="Research Paper template 2"
            />
            <Word
                link="/src/research_webpage/research3.html"
                img="/src/research paper template/research template 4.jpg"
                name="Research Paper template 3"
            />
            <Word
                link="/src/research_webpage/research4.html"
                img="/src/research paper template/research template 2.jpg"
                name="Research Paper template 4"
            /> 
        </>
    )}
if(document.title==="Thesis Templates"){
    section.render(
        <>
            <Word
                link="/src/thesis_webpage/thesis1.html"
                img="/src/thesis template/thesis template 1.jpg"
                name="Thesis template 1"
            />
            <Word
                link="/src/thesis_webpage/thesis2.html"
                img="/src/thesis template/thesis template 2.jpg"
                name="Thesis template 2"
            />
            <Word
                link="/src/thesis_webpage/thesis3.html"
                img="/src/thesis template/thesis template 3.jpg"
                name="Thesis template 3"
            />
            <Word
                link="/src/thesis_webpage/thesis4.html"
                img="/src/thesis template/thesis template 4.jpg"
                name="Thesis template 4"
            />
        </>
        )}
const darkmode=window.matchMedia("(prefers-color-scheme:dark)").matches
function applyMode(){
    if(darkmode){
        document.body.style.backgroundColor="rgb(2, 11, 66)"
        header.style.backgroundColor="rgba(5, 24, 99, 0.79)"
        section1.style.backgroundColor="rgba(5, 24, 99, 0.79)"
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