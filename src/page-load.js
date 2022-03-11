import restaurantImage from './restaurantImage.jpeg';

const contentBody = document.querySelector('#content');

const tabs = document.createElement('div');
tabs.classList.add('tabs');
const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
homeTab.classList.add('tab');
const menuTab = document.createElement('button');
menuTab.classList.add('tab');
menuTab.textContent = 'Menu';
const contactTab = document.createElement('button');
contactTab.classList.add('tab');
contactTab.textContent = 'Contact';
tabs.appendChild(homeTab);
tabs.appendChild(menuTab);
tabs.appendChild(contactTab);

// home tab
const headline = document.createElement('h1');
headline.textContent = `Luca's Ristorante`;

const review = document.createElement('blockquote');
review.textContent = `"This place is great!" - Urban Meyer`;

const img = document.createElement('img');
img.src = restaurantImage;
img.alt = 'restaurant';
img.classList.add('imageSpecs');

// menu tab


// contact tab

contentBody.appendChild(tabs);
contentBody.appendChild(headline);
contentBody.appendChild(img);
contentBody.appendChild(review);


export default {contentBody, homeTab, menuTab, contactTab, headline, review, img, restaurantImage};