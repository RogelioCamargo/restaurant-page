import "./main.css"; 
import { createHeader } from "./app/createHeader"; 
import { createMainSection } from "./app/createMainSection";
import { createMenuSection } from "./app/createMenuSection"; 


// create webpage
export const createWebpage = (contentType) => {
    const content = document.querySelector("#content"); 
    content.innerHTML = ""; 

    content.appendChild(createHeader());

    if (contentType === "home") 
        content.appendChild(createMainSection());  
    else if (contentType === "menu")
        content.appendChild(createMenuSection()); 
}; 

createWebpage("home"); 