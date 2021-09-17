import { parts } from "./parts";
import Cook from '../images/cook.jpg';

export const contactModule = (() => {

    function makeContactPage() {
        const a = parts.template('main'); 
        //h1,h2,description,img,imgDiv,mainDiv]
        const h1 = a[0];
        const h2 = a[1];
        const desc = a[2]
        const img = a[3];
        const imgDiv = a[4];
        const mainDiv = a[5];

        h1.textContent = 'Contact us!';
        h2.textContent = 'This is Sussie';
        desc.textContent = 'She\'s an authentic italian born mamushka capable of crafting purrfect masterpieces with the flick of a claw. Hail her majesty.'
        img.setAttribute('src',`${Cook}`);

        parts.addArr([h1,h2,desc,imgDiv],mainDiv);

        const header = document.querySelector('div#header');
        header.insertAdjacentElement('afterend',mainDiv);  

    }

    return {
        make: makeContactPage,
    }
    
})();