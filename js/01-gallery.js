import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
        loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item)
gallery.addEventListener("click", imageClick)

function imageClick(event) {
     event.preventDefault();
     const target = event.target;
     if (target.classList.contains('gallery__image')) {
         const originalImageUrl = target.dataset.source;
         modal = basicLightbox.create(`
         <img src="${originalImageUrl}" width="800" height="600">
         `);
         modal.show();
         modalIsOpen = true;
     }
     document.addEventListener('keydown', keyDown);
 }







function imageClick(evt) {
    noLink(evt)
    if (evt.target.nodeNeme !== "IMG") {
        return;
    }
    const source = evt.target.dataset.source;
    console.log(source)
    const discribe = evt.target.getAttribute('alt');
    console.dir(discribe)
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="${discribe}">`);
    instance.show();
    gallery.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close()
        }
    })
}
function noLink(evt) {
     evt.preventDefault();
}