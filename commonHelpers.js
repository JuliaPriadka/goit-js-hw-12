import{a as w,S as L,i as c}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let h=15;async function y(r,t=1){return(await w("https://pixabay.com/api/",{params:{key:"43250270-1f98e5ae52bb69b689c51c131",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:h}})).data}function g(r){return r.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:s,comments:i,downloads:C})=>`<li class="card">
        <a href="${o}">
        <img src="${t}" alt="${n}" class="card-img">
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
      </li>`).join("")}let l,f,p;const b=new L(".card a",{captionsData:"alt"}),u=document.querySelector(".form"),m=document.querySelector(".gallery"),d=document.querySelector(".loader"),a=document.querySelector(".load-more-btn");u.addEventListener("submit",S);a.addEventListener("click",q);async function S(r){r.preventDefault(),l=1,a.style.display="none",m.innerHTML="",d.style.display="flex",f=r.target.elements.input.value.trim();try{const t=await y(f,l);if(f.length===0){c.show({message:'Please, fill in the "Search" params',backgroundColor:"#ef4040",messageColor:"#fff",position:"bottomCenter"}),d.style.display="none";return}if(d.style.display="none",t.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"}),u.reset();return}m.insertAdjacentHTML("beforeend",g(t.hits)),a.style.display="flex";const n=document.querySelector(".card").getBoundingClientRect().height;b.refresh()}catch(t){c.show({message:`${t}`,backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"})}u.reset()}async function q(){l+=1,a.style.display="none",d.style.display="flex";try{const r=await y(f,l);m.insertAdjacentHTML("beforeend",g(r.hits));const o=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy(0,o*2),d.style.display="none",a.style.display="flex",b.refresh(),p=Math.ceil(r.totalHits/h),l>=p&&(a.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"}))}catch(r){c.show({message:`${r}`,backgroundColor:" #ffa000",messageColor:"#fff",position:"bottomCenter"})}}
//# sourceMappingURL=commonHelpers.js.map
