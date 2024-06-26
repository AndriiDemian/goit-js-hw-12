import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

import { fetchingFrom } from "./js/pixabay-api";
import { render } from "./js/render-functions";

export let page = 1;
export let limit = 15;
export const elem = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.form'),
  wordInput: document.querySelector('.input'),
  loader: document.querySelector('.loader'),
  button: document.querySelector('.btn-load'),
};

export const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: "alt",
  captionDelay: 250,
  overlay: true,
  overlayOpacity: 0.7,
});

export let word = '';

hideLoading();
hideButton();

elem.form.addEventListener("submit", loadImages);
elem.button.addEventListener("click", loadPages);

function loadImages(e) {
  e.preventDefault()

  page = 1;
  elem.gallery.innerHTML = '';
  word = elem.wordInput.value.trim();

  hideButton();

  if (word !== '') {
    loadPages();
  }
  else {
    displayToast("Please complete the field!")
  }

  elem.form.reset();
};

async function loadPages() {
  try {
    const images = await fetchingFrom();
    const totalPages = Math.ceil(images.totalHits / limit);
    page += 1;

    if (images.hits.length === 0) {
      displayToast("Sorry, there are no images matching your search query. Please try again!");
      hideLoading();
    } else if (page >= totalPages) {
      render(images);
      hideButton();
      hideLoading();
    } else {
      render(images);
      hideLoading();

      if (page > 1) {
        showButton();
      }
    }

    const item = document.querySelector('.gallery-item');
    if (item) {
      const rect = item.getBoundingClientRect();
      window.scrollBy({
        top: rect.height * 2,
        behavior: 'smooth',
      });
    }

    elem.form.reset();
  } catch (error) {
    console.error("Error loading images:", error);
    hideLoading(); 
  }
};





export function displayToast(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

export function showLoading() {
  elem.loader.style.display = 'block';
}

function hideLoading() {
  elem.loader.style.display = 'none';
}

export function showButton() {
  elem.button.style.display = 'block';
}

function hideButton() {
  elem.button.style.display = 'none';
}