import _ from './page-load.js';
import contact from './contact.jpeg';

const contactButton = _.contactTab.addEventListener('click', () => {
    _.headline.textContent = `Luca's contact info.`;
    _.review.textContent = `"Luca's my boy on Facebook" - Urban Meyer`;
    _.img.src = contact;
    _.img.alt = 'contact';
});

export default contactButton;