import MainImage from "../imgs/main-image.jpg"; 

export const Main = (() => {
    const container = document.createElement("div");
    container.classList.add("main");

    const _createLeftMainSection = () => {
        const div = document.createElement("div");
        div.classList.add("main-left");
        div.innerHTML = `<div class="main-left-wrapper">
                <h1 class="heading-statement">Overpriced Food That Tastes Bad!</h1>
                <a href="#" class="ghost-button heading-button">Menu</a>
            </div>`;

        container.appendChild(div);
    }; 

    const _createRightMainSection = () => {
        const div = document.createElement("div");
        div.classList.add("main-right");
        const img = new Image();
        img.classList.add("heading-image");
        img.alt = "Hot and fresh mussels in the pot.";
        img.src = MainImage; 
        div.appendChild(img);

        container.appendChild(div);
    }; 

    const create = () => {
        container.innerHTML = ""; 
        _createLeftMainSection(); 
        _createRightMainSection(); 
        return container; 
    }; 

    return { create }; 
})();
