import Word from "../../components/component";
import { createRoot } from "react-dom/client";
let section1=document.querySelector("#section1")
const section=createRoot(section1)
if(document.title==="Resume Templates"){
section.render(
    <>
    <Word
        link="/src/pages/docs_pages/resume_template1.html"
        img="/assets/images/docs_images/research template 1.jpg"
        name="Resume template 1" 
    />
    <Word
        link="/src/pages/docs_pages/resume_template2.html"
        img="/assets/images/docs_images/research template 2.jpg"
        name="Resume template 2" 
    />
    <Word
        link="/src/pages/docs_pages/resume_template3.html"
        img="/assets/images/docs_images/research template 3.jpg"
        name="Resume template 3" 
    />
    <Word
        link="/src/pages/docs_pages/resume_template4.html"
        img="/assets/images/docs_images/research template 4.jpg"
        name="Resume template 4" 
    />
</>
)}
if(document.title=="Dissertation Templates"){
section.render(
    <>
    <Word
        link="/src/pages/docs_pages/dissertation1.html"
        img="/assets/images/docs_images/dissertation template 1.jpg"
        name="Dissertation template 1"
    />
<Word
        link="/src/pages/docs_pages/dissertation2.html"
        img="/assets/images/docs_images/dissertation template 2.jpg"
        name="Dissertation template 2"
/>
<Word
        link="/src/pages/docs_pages/dissertation3.html"
        img="/assets/images/docs_images/dissertation template 3.jpg"
        name="Dissertation template 3"
/>
<Word
        link="/src/pages/docs_pages/dissertation4.html"
        img="/assets/images/docs_images/dissertation template 3.jpg"
        name="Dissertation template 4"
/> 
    </>
)}
if(document.title==="Essay Templates"){
section.render(
    <>
<Word
    link="/src/pages/docs_pages/essay1.html"
    img="/assets/images/docs_images/essay template 1.jpg"
    name="Essay template 1"
/>
<Word
    link="/src/pages/docs_pages/essay2.html"
    img="/assets/images/docs_images/essay template 2.jpg"
    name="Essay template 2"
/>
<Word
    link="/src/pages/docs_pages/essay3.html"
    img="/assets/images/docs_images/essay template 3.jpg"
    name="Essay template 3"
/>
<Word
    link="/src/pages/docs_pages/essay4.html"
    img="/assets/images/docs_images/essay template 4.jpg"
    name="Essay template 4"
/>
</>
)}
if(document.title==="Report Templates"){
section.render(
    <>
<Word
    link="/src/pages/docs_pages/report_template1.html"
    img="/assets/images/docs_images/business report template.jpg"
    name="Business Report template"
/>
<Word
    link="/src/pages/docs_pages/report_template2.html"
    img="/assets/images/docs_images/incident report template.jpg"
    name="Incident Report template"
/>
<Word
    link="/src/pages/docs_pages/report_template3.html"
    img="/assets/images/docs_images/progress report template.jpg"
    name="Progress Report template"
/>
<Word
    link="/src/pages/docs_pages/report_template4.html"
    img="/assets/images/docs_images/research report template.jpg"
    name="Research Report template"
/>   
</>
    )}
if(document.title==="Business Letter Templates"){
section.render(
        <>
    <Word
        link="/src/pages/docs_pages/business_letter1.html"
        img="/assets/images/docs_images/business letter template1.jpg"
        name="Business Letter template 1"
    />
    <Word
        link="/src/pages/docs_pages/business_letter2.html"
        img="/assets/images/docs_images/business letter template2.jpg"
        name="Business Letter template 2"
    />
    <Word
        link="/src/pages/docs_pages/business_letter3.html"
        img="/assets/images/docs_images/business letter template3.jpg"
        name="Business Letter template 3"
    />
    <Word
        link="/src/pages/docs_pages/business_letter4.html"
        img="/assets/images/docs_images/business letter template4.jpg"
        name="Business Letter template 4"
    />  
        </>
)}
if(document.title==="Business Proposal Templates"){
    section.render(
    <>
        <Word
            link="/src/pages/docs_pages/business_proposal1.html"
            img="/assets/images/docs_images/business proposal template 1.jpg"
            name="Business Proposal template 1"
        />
        <Word
            link="/src/pages/docs_pages/business_proposal2.html"
            img="/assets/images/docs_images/business proposal template 2.jpg"
            name="Business Proposal template 2"
        />
        <Word
            link="/src/pages/docs_pages/business_proposal3.html"
            img="/assets/images/docs_images/business proposal template 3.jpg"
            name="Business Proposal template 3"
        />
        <Word
            link="/src/pages/docs_pages/business_proposal4.html"
            img="/assets/images/docs_images/business proposal template 4.jpg"
            name="Business Proposal template 4"
        />
        </>
    )}
if(document.title==="Newsletter Templates"){
    section.render(
     <>
        <Word
            link="/src/pages/docs_pages/newsletter1.html"
            img="/assets/images/docs_images/newsletter template 1.jpg"
            name="Newsletter template 1"
             />
        <Word
            link="/src/pages/docs_pages/newsletter2.html"
            img="/assets/images/docs_images/newsletter template 2.jpg"
            name="Newsletter template 2"
             />
        <Word
            link="/src/pages/docs_pages/newsletter3.html"
            img="/assets/images/docs_images/newsletter template 3.jpg"
            name="Newsletter template 3"
             />
        <Word
            link="/src/pages/docs_pages/newsletter4.html"
            img="/assets/images/docs_images/newsletter template 4.jpg"
            name="Newsletter template 4"
             />  
        </>
    )}
if(document.title==="Research Templates"){
    section.render(
   <>
<Word
    link="/src/pages/docs_pages/research1.html"
    img="/assets/images/docs_images/research template 1.jpg"
    name="Research Paper template 1"
        />
<Word
    link="/src/pages/docs_pages/research2.html"
    img="/assets/images/docs_images/research template 3.jpg"
    name="Research Paper template 2"
        />
<Word
    link="/src/pages/docs_pages/research3.html"
    img="/assets/images/docs_images/research template 4.jpg"
    name="Research Paper template 3"
        />
<Word
    link="/src/pages/docs_pages/research4.html"
    img="/assets/images/docs_images/research template 2.jpg"
    name="Research Paper template 4"
        /> 
</>
    )}
if(document.title==="Thesis Templates"){
    section.render(
        <>
        <Word
            link="/src/pages/docs_pages/thesis1.html"
            img="/assets/images/docs_images/thesis template 1.jpg"
            name="Thesis template 1"
        />
        <Word
            link="/src/pages/docs_pages/thesis2.html"
            img="/assets/images/docs_images/thesis template 2.jpg"
            name="Thesis template 2"
               />
        <Word
            link="/src/pages/docs_pages/thesis3.html"
            img="/assets/images/docs_images/thesis template 3.jpg"
            name="Thesis template 3"
               />
        <Word
            link="/src/pages/docs_pages/thesis4.html"
            img="/assets/images/docs_images/thesis template 4.jpg"
            name="Thesis template 4"
               />
        </>
        )}
 