import API_ENDPOINT from '../globals/api-endpoint';
 
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
}
 
export default TheRestoDbSource;