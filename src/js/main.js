"use strict";

//1ºvariables globales para meter los datos del Array (creo un array que es una variable global)//

const ulList = document.querySelector(".js_coctels");
const inputSearch = document.querySelector(".js_search");

let coctailsData = [];
/*3ºvoy a renderizar=pintar los datos de mi API creo dos funciones una que contenga todos los coctails y otra que contenta uno en concreto*/
const renderOneCoctails = (eachDrinks) => {
  return `<li class="card">
        <h3> ${eachDrinks.strDrink} </h3>
        <img id="imagen" src="${eachDrinks.strDrinkThumb}" alt="Imagen">
        
  </li>`;
};

const renderAllCoctails = () => {
  for (let i = 0; i < coctailsData.length; i++) {
    ulList.innerHTML += renderOneCoctails(coctailsData[i]);
  }
};
/*2ºcreo mi función que devuelve los datos de la API:
 *(le introduzco loS datos de la URL que contiene el search
 *Este tipo de rutas se llama endpoint*/
const getData = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    //en este then le pido que únicamente me guarde en ki variable dataApi el dato concreto que necesito de la Api//
    .then((dataApi) => {
      coctailsData = dataApi.drinks;
      console.log(dataApi);
      renderAllCoctails(ulList);
    });
};
const handleSearch = () => {
  const valueSearch = inputSearch.value;
  console.log(valueSearch);
};

//3ºLlamo a mi función que se ejecuta al cargar la página cuando hace la petición al servidor//
inputSearch.addEventListener = ("input", handleSearch);
getData();
