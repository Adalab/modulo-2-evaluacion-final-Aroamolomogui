const r=document.querySelector(".js_coctels"),a=document.querySelector(".js_search");let c=[],l=[];const d=t=>{let i="";const e=l.findIndex(o=>o.idDrink===t.id);return console.log(t),console.log(e),e===-1?i=`<li class="card js_cocktails"  id="${t.idDrink}">
    <h3> ${t.strDrink} </h3>
    <img id="imagen" src="${t.strDrinkThumb}" alt="Imagen">
    
</li>`:i=`<li class="card js_cocktails grey"  id="${t.idDrink}">
    <h3> ${t.strDrink} </h3>
    <img id="imagen" src="${t.strDrinkThumb}" alt="Imagen">
    
</li>`,i},u=t=>{const i=t.currentTarget.id,e=c.find(n=>n.idDrink===i),o=l.findIndex(n=>n.idDrink===i);o===-1?l.push(e):l.splice(o),console.log(l),s(c)},s=t=>{r.innerHTML="";for(let e=0;e<t.length;e++)r.innerHTML+=d(t[e]);const i=document.querySelectorAll(".js_cocktails");for(const e of i)e.addEventListener("click",u)},g=()=>{fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(t=>t.json()).then(t=>{c=t.drinks,console.log(c),s(c)})},h=()=>{const t=a.value,i=c.filter(e=>e.strDrink.toLowerCase().includes(t.toLowerCase()));s(i),console.log(i)};g();a.addEventListener("input",h);
//# sourceMappingURL=main.js.map
