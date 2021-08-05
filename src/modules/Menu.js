import BackgroundImage from "../imgs/background.png"; 
import MenuMiddleImage from "../imgs/menu-7.jpg";
import { dishes1, dishes2, entrees1, entrees2 } from "./menuItems"; 


export const Menu = (() => {
    const container = document.createElement("div"); 
    container.classList.add("menu"); 
    container.setAttribute("style", `background-image: url(${BackgroundImage})`);  

    const _createMenuSection = (menuList) => {
        const section = document.createElement("section");
        section.classList.add("menu-section")
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
            desc.classList.add("menu-desc"); 
            desc.textContent = menuItem.name;
            
            // create article
            article.appendChild(img);
            article.appendChild(desc);

            // create section
            section.appendChild(article);
        });

        container.appendChild(section); 
    }

    const _createSectionHeader = (headerText) => {
        const header = document.createElement("h2");
        header.classList.add("menu-header");
        header.textContent = headerText;

        container.appendChild(header);
    } 

    const create = () => {
        const content = document.querySelector("#content");

        _createSectionHeader("Midyeler"); 
        _createMenuSection(dishes1); 
        _createMenuSection(dishes2); 

        const middleSectionImage = new Image(); 
        middleSectionImage.classList.add("menu-mid-image"); 
        middleSectionImage.src = MenuMiddleImage; 
        middleSectionImage.alt = "A plate full of mussels."; 
        container.appendChild(middleSectionImage); 

        _createSectionHeader("Diğer Ürünler"); 
        _createMenuSection(entrees1);
        _createMenuSection(entrees2);

        content.appendChild(container);  
    }

    return { create }; 
})(); 