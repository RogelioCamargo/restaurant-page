import { createWebpage } from "../index"; 

export const createHeader = () => {
    const header = document.createElement("header");

    const _createLogo = (() => {
        const div = document.createElement("div");
        div.classList.add("header-logo");
        div.textContent = "FrenchSounding";
        header.appendChild(div);
    })();

    const _createNav = (() => {
        const nav = document.createElement("nav");
        nav.innerHTML = `<a href="#" class="nav-option">Home</a>
        <a href="#" class="nav-option">Menu</a>
        <a href="#" class="nav-option">Contact</a>
        <a href="#" class="ghost-button nav-option-button">Catering</a>`;
        header.appendChild(nav);
    })();

    const navOptions = header.querySelectorAll(".nav-option"); 
    navOptions.forEach(option => {
        option.addEventListener("click", () => {
            const page = option.textContent.toLowerCase(); 
            createWebpage(page); 
        }); 
    }); 

    return header;
};
