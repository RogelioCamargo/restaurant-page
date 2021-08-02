import "./main.css"; 
import MainImage from "./main-image.jpg";

// create header
const createHeader = () => {
    const header = document.createElement("header"); 

    const _createLogo = (() => {
        const div = document.createElement("div");
        div.classList.add("menu-logo");
        div.textContent = "FrenchSounding";
        header.appendChild(div);
    })();

    const _createNav = (() => {
        const nav = document.createElement("nav");
        nav.classList.add("menu-nav");
        nav.innerHTML = `<a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Menu</a>
        <a href="#" class="menu-item">Contact</a>
        <a href="#" class="ghost-button menu-item-button">Catering</a>`;
        header.appendChild(nav);
    })();

    return header; 
}

// create main section
const createMainSection = () => {
    const section = document.createElement("section"); 
    section.classList.add("main"); 

    const _createLeftMainSection = (() => {
        const div = document.createElement("div"); 
        div.classList.add("main-left"); 
        div.innerHTML = 
            `<div class="main-left-wrapper">
                <h1 class="heading-statement">Overpriced Food That Tastes Bad!</h1>
                <a href="#" class="ghost-button heading-button">Menu</a>
            </div>`;

        section.appendChild(div); 
    })(); 

    const _createRightMainSection = (() => {
        const div = document.createElement("div");
        div.classList.add("main-right");
        const img = new Image(); 
        img.classList.add("heading-image"); 
        img.alt = "Hot and fresh mussels in the pot." 
        img.src = MainImage; 
        div.appendChild(img); 
        
        section.appendChild(div);
    })();

    return section; 
}


// create webpage
const createWebpage = (() => {
    const content = document.querySelector("#content"); 
    
    content.appendChild(createHeader());
    content.appendChild(createMainSection());  
})(); 