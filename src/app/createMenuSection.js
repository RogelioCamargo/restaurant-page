import BackgroundImage from "../imgs/background.png"; 
import MenuItemCenter from "../imgs/menu-7.jpg";
import { dishes1, dishes2, entrees1, entrees2 } from "./menuItems"; 


export const createMenuSection = () => {
    const container = document.createElement("div"); 
    container.classList.add("menu-section"); 
    container.setAttribute("style", `background-image: url(${BackgroundImage})`);  

    const _createMenuSection = (menuList) => {
        const section = document.createElement("section");
        section.classList.add("menu-row")
        let article;
        let img;
        let desc;
        menuList.forEach((menuItem, idx) => {
            article = document.createElement("article");
            article.classList.add("menu-article");

            // create image
            img = new Image();
            img.classList.add("menu-image");
            img.src = menuItem.src;
            img.alt = menuItem.name;

            // create description
            desc = document.createElement("div");
            desc.textContent = menuItem.name;
            
            // create article
            article.appendChild(img);
            article.appendChild(desc);

            // create section
            section.appendChild(article);
        });

        container.appendChild(section); 
    }

    _createMenuSection(dishes1); 
    _createMenuSection(dishes2); 
    _createMenuSection(entrees1);
    _createMenuSection(entrees2); 

    return container; 
}