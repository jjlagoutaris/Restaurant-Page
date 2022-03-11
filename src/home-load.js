import _ from './page-load.js';

const homeButton = _.homeTab.addEventListener('click', () =>{
    _.headline.textContent = `Luca's Ristorante`;
    _.review.textContent = `"This place is great!" - Urban Meyer`;
    _.img.src = _.restaurantImage;
    _.img.alt = 'restaurant';
});

export default homeButton;