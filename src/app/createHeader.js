
export const createHeader = () => {
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
};
