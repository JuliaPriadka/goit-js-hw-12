import{a as w,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let h=15;async function y(r,t=1){return(await w("https://pixabay.com/api/",{params:{key:"43250270-1f98e5ae52bb69b689c51c131",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:h}})).data}function g(r){return r.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:s,comments:i,downloads:C})=>`<li class="card">
        <a href="${o}">
        <img src="${t}" alt="${a}" class="card-img">
        </a>
        <ul class="card-stats">
          <li>
            <h3 class="card-stats-name">Likes</h3>
            <p class="card-stats-info">${e}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Views</h3>
            <p class="card-stats-info">${s}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Comments</h3>
            <p class="card-stats-info">${i}</p>
          </li>
          <li>
            <h3 class="card-stats-name">Downloads</h3>
            <p class="card-stats-info">${C}</p>
          </li>
        </ul>
      </li>`).join("")}let d=1,f,p;const b=new L(".card a",{captionsData:"alt"}),u=document.querySelector(".form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");u.addEventListener("submit",S);n.addEventListener("click",q);async function S(r){if(r.preventDefault(),l.style.display="none",n.style.display="none",m.innerHTML="",f=r.target.elements.input.value.trim(),f.length===0){l.style.display="flex",c.show({message:'Please, fill in the "Search" params',backgroundColor:"#ef4040",messageColor:"#fff",position:"bottomCenter"});return}try{const t=await y(f,d);if(t.hits.length===0){l.style.display="flex",c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"}),u.reset();return}m.insertAdjacentHTML("beforeend",g(t.hits)),n.style.display="flex";const a=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy(0,a*2),b.refresh()}catch(t){c.show({message:`${t}`,backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"})}u.reset()}async function q(){d+=1,n.style.display="none",l.style.display="flex";try{const r=await y(f,d);m.insertAdjacentHTML("beforeend",g(r.hits));const o=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy(0,o*2),l.style.display="none",n.style.display="flex",b.refresh(),p=Math.ceil(r.totalHits/h),d>=p&&(n.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"}))}catch(r){c.show({message:`${r}`,backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"})}}
//# sourceMappingURL=commonHelpers.js.map
