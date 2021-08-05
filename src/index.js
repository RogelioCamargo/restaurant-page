import "./main.css"; 
import { createHeader } from "./modules/createHeader"; 
import { Main } from "./modules/Main";
import { Menu } from "./modules/Menu"; 


// create webpage
export const createWebpage = (contentType) => {
    const content = document.querySelector("#content"); 
    content.innerHTML = ""; 

    content.appendChild(createHeader());

    if (contentType === "home") 
        Main.create();  
    else if (contentType === "menu")
        Menu.create(); 
}; 

createWebpage("home"); 