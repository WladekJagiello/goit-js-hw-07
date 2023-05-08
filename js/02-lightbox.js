import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryList = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`;
  })
  .join("");

galleryEl.innerHTML = galleryList;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
  close: false,
});
