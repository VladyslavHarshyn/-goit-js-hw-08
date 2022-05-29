'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function addItem() {
  return galleryItems
    .map(
      items =>
        `<a class="gallery__item" href="${items.original}">
  <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
</a>`,
    )
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', addItem(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
