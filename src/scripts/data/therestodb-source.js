import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheRestoDbSource {
  static async List() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async Details(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheRestoDbSource;
