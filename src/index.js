import "./main.css"; 
import { Header } from "./modules/Header"; 
import { Main } from "./modules/Main";
import { Menu } from "./modules/Menu"; 


// create webpage
export const createWebpage = (contentType) => {
    const content = document.querySelector("#content"); 
    content.innerHTML = ""; 

    content.appendChild(Header.create()); 
    if (contentType === "home") 
        content.appendChild(Main.create());  
    else if (contentType === "menu")
        content.appendChild(Menu.create()); 
}; 

createWebpage("home"); 