/* eslint-disable no-use-before-define */
import CONFIG from '../../globals/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createDishItemTemplate = (data) => `
  <li id=${data.id} class="restaurant-item" tabindex="0">
    <div class="restaurant-item__image">
        <img class="lazyload" data-src="${CONFIG.IMG.Small}${data.pictureId}" alt="resto ${data.name}" aria-hidden="true"/>
    </div>

    <header>
        <a href="${`/#/detail/${data.id}`}" class="restaurant-item__name" aria-label="Restaurant name: ${data.name}."> 
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
        ${`${data.description.substr(0, 200)} ... `}
    </p>
    
  </li>`;

const createDishDetailTemplate = (data) => `
  <div class="detail_header">
    <picture>
      <source type="image/webp" srcset=${CONFIG.IMG.Medium}${data.pictureId}/>
      <source type="image/jpeg" srcset=${CONFIG.IMG.Medium}${data.pictureId}/>
      <source media="(max-width: 600px)" srcset=${CONFIG.IMG.S}${
  data.pictureId
}>
      <img class="detail_poster lazyload" data-src=${CONFIG.IMG.Medium}${
  data.pictureId
} alt="${data.name}"/>
    </picture>
    <h2 class="detail_title">${data.name.toUpperCase()}</h2>
  </div>
  <div class="detail_info">
    <h3>INFORMATION</h3>
    <p>City : ${data.city}</p>
    <p>Address : ${data.address}</p>
    <p>Rating : ${data.rating}⭐️</p>
    <div class="info_food">
      <h4>FOOD</h4>
      <ul>
        <li>${data.menus.foods[0].name}</li>
        <li>${data.menus.foods[1].name}</li>
        <li>${data.menus.foods[2].name}</li>
      </ul>
    </div>
    <div class="info_drinks">
      <h4>DRINKS</h4>
      <ul>
        <li>${data.menus.drinks[0].name}</li>
        <li>${data.menus.drinks[1].name}</li>
        <li>${data.menus.drinks[2].name}</li>
      </ul>
    </div>
    <div class="info_categories">
      <h4>CATEGORIES</h4>
      <span>${data.categories[0].name}</span>
      ${
  data.categories.length > 1
    ? `<span>${data.categories[1].name}</span>`
    : ''
}
    </div>
  </div>
  <div class="detail_overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  <div class="detail_reviews">
    <h3>Reviews</h3>
    ${createReviewCard(data.customerReviews)}
  </div>
`;

const createReviewCard = (data) => {
  let customerReview = '';
  data.forEach((review) => {
    customerReview += `
      <p>Oleh ${review.name} : </p>
      <p>${review.review}</p>
      <p>Pada ${review.date}</p>
      <br>
    `;
  });
  return customerReview;
};

const createLikeRestoButton = () => `
  <button aria-label="Favorite this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButton = () => `
  <button aria-label="Unfavourite this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmptyFavorite = () => `
  <div class="empty_container">
    <h3>Sorry...</h3>
    <p class="resto-item__not__found">There's no one restaurant has been liked</p>
  </div>
`;

const createSkeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <li class="restaurant-item">
        <div class="restaurant-item__image">
            <img class="lazyload" data-src="./placeholder.svg" alt="skeleton-img"/>
        </div>

        <header>
            <a class="restaurant-item__name"> 
              <h2>Lorem ipsum dolor sit amet.</h2> 
            </a>
        </header>

        <p class="restaurant-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptatum veniam amet reprehenderit eligendi doloremque et maxime? Incidunt, nulla assumenda.
        </p>
      
      </li>
  `;
  }
  return template;
};

export {
  createDishDetailTemplate,
  createDishItemTemplate,
  createLikeRestoButton,
  createUnlikeRestoButton,
  createReviewCard,
  createEmptyFavorite,
  createSkeletonTemplate,
};
