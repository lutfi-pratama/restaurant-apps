import Home from '../views/pages/home';
import OurFavorites from '../views/pages/our-favorites';
import Detail from '../views/pages/detail';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/our-favorites': OurFavorites,
    '/detail/:id': Detail,
};

export default routes;
