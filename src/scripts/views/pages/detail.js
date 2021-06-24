import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto">detail page</div>
    `;
  },
  
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await TheRestoDbSource.Details(url.id);
    
    console.log(items);
  },
};
  
export default Detail;