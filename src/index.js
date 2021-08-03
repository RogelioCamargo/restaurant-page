import "./main.css"; 
import { createHeader } from "./modules/createHeader"; 
import { createMainSection } from "./modules/createMainSection";
import { createMenuSection } from "./modules/createMenuSection"; 


// create webpage
const createWebpage = (() => {
    const content = document.querySelector("#content"); 
    
    content.appendChild(createHeader());
    // content.appendChild(createMainSection());  
})(); 