import{a as g,S as h,i as b}from"./assets/vendor-6e0bf343.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function w(){const e=new URLSearchParams({key:"42957626-41f27679caf00334274850a6e",q:u,image_type:"photo",orientation:"horizontal",safesearch:"true",page:l,per_page:p}),n=await g.get(`https://pixabay.com/api/?${e}`);return S(),n.data}function f(e){const a=e.hits.map(o=>`<li class="gallery-item">
              <a class="gallery-link" href="${o.largeImageURL}">
                <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
              </a>
              <div class="stats">
                <p class="text">Likes<br/>${o.likes}</p>
                <p class="text">Views<br/>${o.views}</p>
                <p class="text">Comments<br/>${o.comments}</p>
                <p class="text">Downloads<br/>${o.downloads}</p>
              </div>
            </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",a),L.refresh()}let l=1,p=15;const s={gallery:document.querySelector(".gallery"),form:document.querySelector(".form"),wordInput:document.querySelector(".input"),loader:document.querySelector(".loader"),button:document.querySelector(".btn-load")},L=new h(".gallery-link",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.7});let u="";i();d();s.form.addEventListener("submit",v);s.button.addEventListener("click",m);function v(e){e.preventDefault(),l=1,s.gallery.innerHTML="",u=s.wordInput.value.trim(),d(),u!==""?m():y("Please complete the field!"),s.form.reset()}async function m(){try{const e=await w(),n=Math.ceil(e.totalHits/p);l+=1,e.hits.length===0?(y("Sorry, there are no images matching your search query. Please try again!"),i()):l>=n?(f(e),d(),i()):(f(e),i(),l>1&&q());const a=document.querySelector(".gallery-item");if(a){const o=a.getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}s.form.reset()}catch(e){console.error("Error loading images:",e),i()}}function y(e){b.error({title:"Error",message:e,position:"topRight"})}function S(){s.loader.style.display="block"}function i(){s.loader.style.display="none"}function q(){s.button.style.display="block"}function d(){s.button.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
