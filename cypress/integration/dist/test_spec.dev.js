"use strict";

describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('The Main page', function () {
  it('The page loads successfully', function () {
    cy.visit('http://127.0.0.1:5500/freya-dixon-calculator/index.html');
  });
});