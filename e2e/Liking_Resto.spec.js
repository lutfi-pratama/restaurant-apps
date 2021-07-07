Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/our-favorites');
});

Scenario('showing empty liked Resto', ({ I }) => {
    I.seeElement('.empty_container');
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});


Scenario('like and unlike one Resto', ({ I }) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
   
    // Liking resto
    I.amOnPage('/');

    I.seeElement('.restaurant-item header a');
    I.click(locate('.restaurant-item header a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/our-favorites');
    I.seeElement('.restaurant-item');

    // Unliking resto
    I.click(locate('.restaurant-item header a'));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/our-favorites');
    I.seeElement('.empty_container');
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});
