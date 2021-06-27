import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createDishDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="center">
          <h2 tabindex="0">Detail Restaurant</h2>
        </div>
        <div id="resto_details" class="detail container_height"></div>
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await TheRestoDbSource.Details(url.id);
    const { restaurant } = items;
    const detailContainer = document.getElementById("resto_details");
    detailContainer.innerHTML = createDishDetailTemplate(restaurant);
    // console.log(items);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById("likeButtonContainer"),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};
  
export default Detail;