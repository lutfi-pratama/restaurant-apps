import TheRestoDbSource from '../../data/therestodb-source';
import { createDishItemTemplate, createSkeletonTemplate } from '../templates/template-creator';
import LoaderInitiator from '../../utils/loader-initiator';

const Home = {
  async render() {
    return `
    <section id="top-restaurants">
      <h2 tabindex="0">Top Restaurants</h2>
      <h3 class="subtitle">These are some of the best restaurants we have</h3>
      <div id="loading"></div>
      <ul id="top-restaurants__ul">
        ${createSkeletonTemplate(20)}
      </ul>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    // Set Loading
    const loader = document.querySelector('#loading');
    LoaderInitiator.displayLoading(loader);
    const dish = await TheRestoDbSource.List();
    LoaderInitiator.hideLoading(loader);

    const dishContainer = document.getElementById('top-restaurants__ul');
    if (dish && dish.length > 0) {
      dishContainer.innerHTML = ''; // clear template
      dish.forEach((item) => {
        dishContainer.innerHTML += createDishItemTemplate(item);
      });
    }
  },
};

export default Home;
