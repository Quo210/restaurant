export { homeModule };

import { parts } from "./parts";

const homeModule = ( () => {

    function makeHomepage() {
        //Create the DOM Elements
        const mainDiv = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const description = document.createElement('p');
        const img = document.createElement('img');
        const imgDiv = document.createElement('div');

        //Add Content
        mainDiv.classList.add('main');
        h1.textContent = 'Mine Ristoranti';
        h2.textContent = 'Webpack powered restaurant'
        let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab necessitatibus voluptatem praesentium reiciendis expedita fugiat facilis autem incidunt, distinctio veniam officiis maiores esse omnis itaque eius modi repudiandae dolores.'
        description.textContent = lorem;
        img.setAttribute('src','../images/food.jpg');
        imgDiv.setAttribute('id','imgDiv');
        

        //Append them together
        imgDiv.appendChild(img);
        const eleArr = [h1,h2,description,imgDiv];
        parts.addArr(eleArr,mainDiv);

        const header = document.querySelector('div#header');
        header.insertAdjacentElement('afterend',mainDiv);       
        
    }

    return {
        make: makeHomepage,
    }
})();