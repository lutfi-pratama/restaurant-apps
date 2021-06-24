import CONFIG from '../../globals/api-endpoint';

const createDishItemTemplate = (data) =>
  `<li id=${data.id} class="restaurant-item" tebindex="0">
    <div class="restaurant-item__image">
        <img src="${CONFIG.IMG.Small}${data.pictureId}" alt=" " aria-hidden="true"/>
    </div>

    <header>
        <a href="#" class="restaurant-item__name" aria-label="Restaurant name: ${data.name}."> 
          <h2>${data.name}</h2> 
        </a>

        <div class="restaurant-item__metadata restaurant-item__location" aria-label="Location: ${data.city}.">
            <ion-icon name="pin"></ion-icon> <p>${data.city}</p>
        </div>

        <div class="restaurant-item__metadata restaurant-item__rating" aria-label="Rating: ${data.rating} out of 5.">
            <ion-icon name="star"></ion-icon> <p>${data.rating}<p/>
        </div>
    </header>

    <p class="restaurant-description" aria-label="Description: ${data.description}">
        ${`${data.description.substr(0,200)} ... `}
    </p>
    
  </li>`;

const createDishDetailTemplate = (data) => `
  <div class="detail__header">
    <picture>
      <source type="image/webp" srcset=${CONFIG.IMG.M}${data.pictureId}/>
      <source type="image/jpeg" srcset=${CONFIG.IMG.M}${data.pictureId}/>
      <source media="(max-width: 600px)" srcset=${CONFIG.IMG.S}${
  data.pictureId
}>
      <img class="detail__poster lazyload" data-src=${CONFIG.IMG.M}${
  data.pictureId
} alt=${data.name}/>
    </picture>
    <h2 class="detail__title">${data.name.toUpperCase()}</h2>
  </div>
  <div class="detail__info">
    <h3>INFORMATION</h3>
    <p>City : ${data.city}</p>
    <p>Address : ${data.address}</p>
    <p>Rating : ${data.rating}⭐️</p>
    <div class="info__food">
      <h4>FOOD</h4>
      <ul>
        <li>${data.menus.foods[0].name}</li>
        <li>${data.menus.foods[1].name}</li>
        <li>${data.menus.foods[2].name}</li>
      </ul>
    </div>
    <div class="info__drinks">
      <h4>DRINKS</h4>
      <ul>
        <li>${data.menus.drinks[0].name}</li>
        <li>${data.menus.drinks[1].name}</li>
        <li>${data.menus.drinks[2].name}</li>
      </ul>
    </div>
    <div class="info__categories">
      <h4>CATEGORIES</h4>
      <span>${data.categories[0].name}</span>
      ${
        data.categories.length > 1
          ? `<span>${data.categories[1].name}</span>`
          : ``
      }
    </div>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  <div class="detail__reviews">
    <h3>Reviews</h3>
    <p>Oleh ${data.customerReviews[0].name} : </p>
    <p>${data.customerReviews[0].review}</p>
    <p>Pada ${data.customerReviews[0].date}</p>
  </div>
`;

export {
    createDishDetailTemplate,
    createDishItemTemplate,
};