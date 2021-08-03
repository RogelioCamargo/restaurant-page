import "./main.css"; 
import { createHeader } from "./app/createHeader"; 
import { createMainSection } from "./app/createMainSection";
import { createMenuSection } from "./app/createMenuSection"; 


// create webpage
const createWebpage = (() => {
    const content = document.querySelector("#content"); 
    
    content.appendChild(createHeader());
    // content.appendChild(createMainSection());  
    content.appendChild(createMenuSection()); 
})(); 