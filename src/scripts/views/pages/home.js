import TheRestoDbSource from '../../data/therestodb-source';
import { createDishItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <section id="top-restaurants">
      <h2 tabindex="0">Top Restaurants</h2>
      <h3 class="subtitle">These are some of the best restaurants we have</h3>
      <ul id="top-restaurants__ul">

      </ul>
    </section>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const dish = await TheRestoDbSource.List();
    console.log(dish);
    const dishContainer = document.getElementById("top-restaurants__ul");
    if (dish && dish.length > 0) {
      dish.forEach((item) => {
        dishContainer.innerHTML += createDishItemTemplate(item);
      });
    }
  },
};
  
export default Home;