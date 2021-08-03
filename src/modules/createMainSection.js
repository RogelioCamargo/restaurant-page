import MainImage from "../imgs/main-image.jpg"; 

export const createMainSection = () => {
    const section = document.createElement("section");
    section.classList.add("main");

    const _createLeftMainSection = (() => {
        const div = document.createElement("div");
        div.classList.add("main-left");
        div.innerHTML = `<div class="main-left-wrapper">
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
        img.alt = "Hot and fresh mussels in the pot.";
        img.src = MainImage; 
        div.appendChild(img);

        section.appendChild(div);
    })();

    return section;
};
