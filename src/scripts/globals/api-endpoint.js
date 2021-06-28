import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  IMG: {
    Small: `${CONFIG.BASE_URL}/images/small/`,
    Medium: `${CONFIG.BASE_URL}/images/medium/`,
    Large: `${CONFIG.BASE_URL}/images/large/`,
  },
};

export default API_ENDPOINT;
