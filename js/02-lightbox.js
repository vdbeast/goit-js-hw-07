import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function initGallery(items) {
    let galleryElements = items.map(item => {
        const itemEL = document.createElement('li');
        itemEL.classList.add('gallery__item');
    
        let linkEl = document.createElement('a');
        linkEl.classList.add('gallery__link');
        linkEl.href = item.original;

        let imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = item.preview;
        imgEl.alt = item.description;
        imgEl.dataset.source = item.original;


        itemEL.appendChild(linkEl);
        linkEl.appendChild(imgEl)

        return linkEl;
    });
 
    galleryEl.append(...galleryElements);
}

initGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});