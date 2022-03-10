import restaurantImage from './restaurantImage.jpeg';

const contentBody = document.querySelector('#content');
const headline = document.createElement('h1');
headline.textContent = `Luca's Ristorante`;
const review = document.createElement('blockquote');
review.textContent = `"This place is great!" - Urban Meyer`;
const img = document.createElement('img');
img.src = restaurantImage;
img.alt = 'restaurant';


contentBody.appendChild(headline);
contentBody.appendChild(img);
contentBody.appendChild(review);


export default contentBody;