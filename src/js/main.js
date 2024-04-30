"use strict";

//1ºvariables globales para meter los datos del Array (creo un array que es una variable global)//

const ulList = document.querySelector(".js_coctels");
const inputSearch = document.querySelector(".js_search");

let coctailsData = [];
let coctailsFavorites = [];
/*3ºvoy a renderizar=pintar los datos de mi API creo dos funciones una que contenga todos los coctails y otra que contenta uno en concreto*/
const renderOneCoctails = (eachDrinks) => {
  return `<li class="card js_cocktails"  id="${eachDrinks.idDrink}">
        <h3> ${eachDrinks.strDrink} </h3>
        <img id="imagen" src="${eachDrinks.strDrinkThumb}" alt="Imagen">
        
  </li>`;
};
//creo mi función donde voy a guardar los favoritos//
const addfavorite = (ev) => {
  //   console.log(ev.currentTarget.id);
  //obtener todos los datos del cocktel clicado para luego añadirlo a fav//
  const liClickedId = ev.currentTarget.id;
  const clickedCoctailData = coctailsData.find(
    (item) => item.idDrink === liClickedId
  );

  //verificar si el cocktel es ya un favorito por que se me está duplicando al hacerle click en la consola//

  const favoriteLiClickedindex = coctailsFavorites.findIndex(
    (item) => item.idDrink === liClickedId
  );

  if (favoriteLiClickedindex === -1) {
    //añadir al array de fav el cocktel clicado//
    coctailsFavorites.push(clickedCoctailData);
  } else {
    //saco del array de favorito//
    coctailsFavorites.splice(favoriteLiClickedindex), 1;
  }

  console.log(coctailsFavorites);
};

const renderAllCoctails = (array) => {
  ulList.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    ulList.innerHTML += renderOneCoctails(array[i]);
  }
  //una vez termina este bucle puedo seleccionar todos mis cocktel porque ya han sido creadas por ello creo documentall después lo meto dentro //
  const allcocktailsLi = document.querySelectorAll(".js_cocktails");
  //hago un bucle xk tengo que recorrer el array de los li//
  for (const li of allcocktailsLi) {
    //cuando haga click sobre cada uno de ellos añadelo en la FM addFavorite//
    li.addEventListener("click", addfavorite);
  }
};
/*2ºcreo mi función que devuelve los datos de la API:
 *(le introduzco loS datos de la URL que contiene el search
 *Este tipo de rutas se llama endpoint*/
const getData = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    //en este then le pido que únicamente me guarde en mi variable dataApi el dato concreto que necesito de la Api//
    .then((dataApi) => {
      coctailsData = dataApi.drinks;
      //   console.log(dataApi);
      renderAllCoctails(coctailsData);
    });
};
const handleSearch = () => {
  const valueSearch = inputSearch.value;
  const filterCoctails = coctailsData.filter((item) =>
    item.strDrink.toLowerCase().includes(valueSearch.toLowerCase())
  );
  renderAllCoctails(filterCoctails);
  console.log(filterCoctails);
};

//3ºLlamo a mi función que se ejecuta al cargar la página cuando hace la petición al servidor//

getData();
inputSearch.addEventListener("input", handleSearch);
