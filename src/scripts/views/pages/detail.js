import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createDishDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import addNewReview from '../../utils/addNewReview';
import LoaderInitiator from '../../utils/loader-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="center">
          <h2 tabindex="0">Detail Restaurant</h2>
        </div>
        <div id="loading"></div>
        <div id="resto_details" class="detail container_height"></div>
        <div id="likeButtonContainer"></div>

        <div class="add-reviews">
          <h2 class="add-review_title">Add New Review</h2>
          <div class="review_form">
            <div class="input_form">
              <div class="review_form_name">
                  <label for="name">Name</label><br>
                  <input type="text" name="name" id="reviewerName" placeholder="Input your name" required>
              </div>
              <div class="review_form_content">
                  <label for="content">Review</label><br>
                  <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>
              </div>
            </div>
            <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>
          </div>
      </div>
    `;
  },

  async afterRender() {
    const loader = document.querySelector('#loading');
    LoaderInitiator.displayLoading(loader);
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await TheRestoDbSource.Details(url.id);
    LoaderInitiator.hideLoading(loader);
    const { restaurant } = items;
    const detailContainer = document.getElementById('resto_details');
    detailContainer.innerHTML = createDishDetailTemplate(restaurant);
    addNewReview.post(url);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
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
