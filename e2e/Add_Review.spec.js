/* eslint-disable no-undef */
Feature('Add Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('adding a review in the one of resto', ({ I }) => {
  I.seeElement('.restaurant-item header a');
  I.wait(2);
  I.click(locate('.restaurant-item header a').first());

  I.seeElement('.review_form .input_form');
  I.fillField('name', 'Muhammad Lutfi');
  I.fillField('content', 'Sangat luar biasa');
  I.click('#submit');

  I.see('Muhammad Lutfi', '.detail_reviews p');
  I.see('Sangat luar biasa', '.detail_reviews p');
});
