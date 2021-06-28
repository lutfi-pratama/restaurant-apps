import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createDishItemTemplate } from '../templates/template-creator';
import LoaderInitiator from '../../utils/loader-initiator';

const OurFavorites = {
    async render() {
      return `
        <section id="top-restaurants">
          <h2 tabindex="0">Our Favorite Restaurant</h2>
          <div id="loading"></div>
          <ul id="top-restaurants__ul">
 
          </ul>
        </section>
      `;
    },
   
    async afterRender() {
      const loader = document.querySelector("#loading");
      LoaderInitiator.displayLoading(loader);
      const dish = await FavoriteRestoIdb.getAllDish();
      LoaderInitiator.hideLoading(loader);
      
      const dishContainer = document.getElementById("top-restaurants__ul");

      dish.forEach((item) => {
        dishContainer.innerHTML += createDishItemTemplate(item);
      });
    },
  };
   
  export default OurFavorites;