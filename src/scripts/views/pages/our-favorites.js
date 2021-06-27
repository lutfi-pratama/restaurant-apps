import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createDishItemTemplate } from '../templates/template-creator';

const OurFavorites = {
    async render() {
      return `
        <section id="top-restaurants">
          <h2 tabindex="0">Our Favorite Restaurant</h2>
          <ul id="top-restaurants__ul">

          </ul>
        </section>
      `;
    },
   
    async afterRender() {
      const dish = await FavoriteRestoIdb.getAllDish();
      const dishContainer = document.getElementById("top-restaurants__ul");

      dish.forEach((item) => {
        dishContainer.innerHTML += createDishItemTemplate(item);
      });
    },
  };
   
  export default OurFavorites;