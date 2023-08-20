import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const renderList = (arr) => arr
    .map((img) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
    </a>
    </li>`)
    .join("");

listEl.insertAdjacentHTML("afterbegin", renderList(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});