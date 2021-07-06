import FavoriteRestoIdb from "../src/scripts/data/favoriteresto-idb";
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Movie', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestoIdb.putDish({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestoIdb.deleteDish(1);
    });

    it('should display unlike widget when the movie has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="Unfavourite this resto"]'))
            .toBeTruthy();
    });
    
    it('should not display like widget when the movie has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        expect(document.querySelector('[aria-label="Favorite this resto"]'))
        .toBeFalsy();
    });

    it('should be able to remove liked movie from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        document.querySelector('[aria-label="Unfavourite this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestoIdb.getAllDish()).toEqual([]);
    });

    it('should be able to remove liked movie from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        document.querySelector('[aria-label="Unfavourite this resto"]').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestoIdb.getAllDish()).toEqual([]);
    });
    
    it('should be able to remove liked movie from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        document.querySelector('[aria-label="Unfavourite this resto"]').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestoIdb.getAllDish()).toEqual([]);
    });

    it('should not throw error if the unliked movie is not in the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        
        await FavoriteRestoIdb.deleteDish(1);

        document.querySelector('[aria-label="Unfavourite this resto"]').dispatchEvent(new Event('click'));
    
        expect(await FavoriteRestoIdb.getAllDish()).toEqual([]);
    });
});