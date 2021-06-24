import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

// import TOP_RESTAURANTS from '../DATA.json';

// Config Drawer
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

// Render Url Page
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});


/*
window.onload = () => {
  const topRestaurantsSection = document.querySelector('#top-restaurants__ul');
  const restaurantsList = TOP_RESTAURANTS.restaurants.map((restaurant) => {
    const newItem = document.createElement('li');
    newItem.classList.add('restaurant-item');
    newItem.setAttribute('tabindex', '0');

    const articleHeader = document.createElement('header');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('restaurant-item__image');

    const restaurantImage = document.createElement('img');
    restaurantImage.src = restaurant.pictureId;
    restaurantImage.setAttribute('alt', ' ');
    restaurantImage.setAttribute('aria-hidden', 'true');
    imageWrapper.appendChild(restaurantImage);

    const restaurantName = document.createElement('a');
    restaurantName.classList.add('restaurant-item__name');
    restaurantName.setAttribute(
      'aria-label',
      `Restaurant name: ${restaurant.name}.`,
    );
    restaurantName.href = '#';
    restaurantName.innerHTML = `<h2>${restaurant.name}</h2>`;

    const restaurantLoc = document.createElement('div');
    restaurantLoc.classList.add(
      'restaurant-item__metadata',
      'restaurant-item__location',
    );
    restaurantLoc.innerHTML = `<ion-icon name="pin"></ion-icon> <p>${restaurant.city}</p>`;
    restaurantLoc.setAttribute('aria-label', `Location: ${restaurant.city}.`);

    const restaurantRating = document.createElement('div');
    restaurantRating.classList.add(
      'restaurant-item__metadata',
      'restaurant-item__rating',
    );
    restaurantRating.innerHTML = `<ion-icon name="star"></ion-icon> <p>${restaurant.rating}<p/>`;
    restaurantRating.setAttribute(
      'aria-label',
      `Rating: ${restaurant.rating} out of 5.`,
    );

    articleHeader.appendChild(restaurantName);
    articleHeader.appendChild(restaurantRating);
    articleHeader.appendChild(restaurantLoc);

    const restaurantDesc = document.createElement('p');
    restaurantDesc.textContent = `${restaurant.description.slice(0, 150)}...`;
    restaurantDesc.classList.add('restaurant-description');
    restaurantDesc.setAttribute(
      'aria-label',
      `Description: ${restaurant.description.slice(0, 150)}`,
    );

    newItem.appendChild(imageWrapper);
    newItem.appendChild(articleHeader);
    newItem.appendChild(restaurantDesc);

    return newItem;
  });

  restaurantsList.forEach((restaurantItem) => topRestaurantsSection.appendChild(restaurantItem));

  const hamburgerButton = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');
  const navUl = nav.querySelector('ul');
  const navLi = navUl.querySelectorAll('li');

  const matchMedia = window.matchMedia('(min-width: 600px)');
  if (matchMedia.matches) {
    navLi.forEach((item) => item.setAttribute('tabindex', '0'));
    navUl.setAttribute('aria-hidden', 'false');
  }
  matchMedia.addEventListener('change', (x) => {
    if (x.matches) {
      navLi.forEach((item) => item.setAttribute('tabindex', '0'));
      navUl.setAttribute('aria-hidden', 'false');
    }
  });

  const UL_CLASS_NAME = 'showing-mobile-menu';
  hamburgerButton.addEventListener('click', () => {
    if (navUl.classList.contains(UL_CLASS_NAME)) {
      navUl.classList.remove(UL_CLASS_NAME);
      navUl.setAttribute('aria-haspopup', 'false');
      navUl.setAttribute('aria-hidden', 'true');
      navLi.forEach((li) => li.setAttribute('tabindex', '-1'));
    } else {
      navUl.classList.add(UL_CLASS_NAME);
      navUl.setAttribute('aria-haspopup', 'true');
      navUl.setAttribute('aria-hidden', 'false');
      navLi.forEach((li) => li.setAttribute('tabindex', '0'));
    }
  });

  document.addEventListener('scroll', () => {
    if (navUl.classList.contains(UL_CLASS_NAME)) {
      navUl.classList.remove(UL_CLASS_NAME);
      navUl.setAttribute('aria-haspopup', 'false');
      navUl.setAttribute('aria-hidden', 'false');
      navLi.forEach((li) => li.setAttribute('tabindex', '-1'));
    }
  });
};

*/
