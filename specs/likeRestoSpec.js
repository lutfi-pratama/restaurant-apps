import FavoriteRestoIdb from "../src/scripts/data/favoriteresto-idb";
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {

    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
    
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the movie has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="Favorite this resto"]'))
            .toBeTruthy();
    });

    it('should not show the unlike button when the movie has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="Unfavourite this resto"]'))
            .toBeFalsy();
    });

    it('should be able to like the movie', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const dish = await FavoriteRestoIdb.getDish(1);
       
        expect(dish).toEqual({ id: 1 });
       
        FavoriteRestoIdb.deleteDish(1);
    });

    it('should not add a movie again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllDish()).toEqual([{ id: 1 }]);

        FavoriteRestoIdb.deleteDish(1);
    });

    it('should not add a movie when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});
    
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestoIdb.getAllDish()).toEqual([]);
    }); 
});