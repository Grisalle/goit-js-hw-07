import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr) => arr
    .map((img) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}" />
    </a>
    </li>`)
    .join("");

let modalInstance = null;

const handleListClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }

    event.preventDefault();

    modalInstance = basicLightbox
        .create(`<div class="modal"><img src="${event.target.dataset.source}" alt="${event.target.alt}" /></div>`);
            
    modalInstance.show();

    document.addEventListener("keydown", modalClose);
};

const modalClose = (event) => {
    if (event.key === "Escape") {
        modalInstance.close();
    };
};

listEl.insertAdjacentHTML("afterbegin", renderList(galleryItems));
listEl.addEventListener("click", handleListClick);
