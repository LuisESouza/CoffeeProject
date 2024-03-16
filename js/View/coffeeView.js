import { elements } from './base.js';

export const renderCoffee = (coffees) => {
  let markup = "";

  coffees.forEach(coffee => {
    markup += `
    <div class="coffee">
      <div class="img-container"> 
        <div class="indicator-container">
          ${coffee.popular ? "<span class='popular-indicator'>Popular</span>" : ""}
          ${coffee.available ? "":"<span class='soldOut-indicator'>Sold out</span>"}
        </div>
        <img src="${coffee.image}" alt="${coffee.name}" class="imgCoffee">
      </div>
      <div class="info-coffee">
        <a class="name-coffee">${coffee.name}</a>
        <div class="div-price">
          <span class="price">${coffee.price}</span>
        </div>
        <div class="avaliation-container">
        ${coffee.rating ? `<span><img src="img/Star_fill.svg"></span>` : "<span><img src='img/Star.svg'></span>"}
          ${coffee.rating ? `<span>${coffee.rating} <span class='votes'>(${coffee.votes} votos)</span></span>` : "<span style='color: #6F757C;'>No ratings</span>"}
        </div>
      </div>
    </div>
    `;
  });

  elements.coffeeList.insertAdjacentHTML("afterbegin", markup);
}
