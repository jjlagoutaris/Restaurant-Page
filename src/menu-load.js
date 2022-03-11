import _ from './page-load.js';
import menu from './menu.jpeg';

const menuButton = _.menuTab.addEventListener('click', () =>{
    _.headline.textContent = `Luca's menu`;
    _.review.textContent = `"I recommend the gator stew!" - Urban Meyer`;
    _.img.src = menu;
    _.img.alt = 'menu';
});

export default menuButton;