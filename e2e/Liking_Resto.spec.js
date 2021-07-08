/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/our-favorites');
});

Scenario('showing empty liked Resto', ({ I }) => {
  I.seeElement('.empty_container');
  I.see("There's no one restaurant has been liked", '.resto-item__not__found');
});

Scenario('like and unlike one Resto', ({ I }) => {
  // Liking resto
  I.amOnPage('/');

  I.seeElement('.restaurant-item header a');
  I.wait(2);
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
  I.see("There's no one restaurant has been liked", '.resto-item__not__found');
});
