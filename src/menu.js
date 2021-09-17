import { parts } from "./parts";
import Pizza1 from '../images/pizza.jpg'
import Pizza2 from '../images/corn-pizza.jpg';
import Pizza3 from '../images/shrimp.jpg';

export const menuModule = (()=>{
    class Food {
        constructor(name,price,description,imgdir) {
            this.name = name;
            this.price = price;
            this.tag = description;
            this.image = imgdir;
        }
    }

    function newFood(food) {
        //Create the DOM Elements
        const a = parts.template('menuDiv'); // [h1,h2,description,img,imgDiv,mainDiv];

        const div = a[5];
        const h1 = a[0];
        const h2 = a[1];
        const imgDiv = a[4]
        const img = a[3];
        const description = a[2];

        //Add Content
        h1.textContent = food.name;
        h2.textContent = 'Price: ' + food.price;
        description.innerHTML = '<span class="desc">Description: </span>'+ food.tag;
        img.setAttribute('src',`${food.image}`);
        

        // //Append them together
        imgDiv.appendChild(img);
        const eleArr = [h1,h2,description,imgDiv];
        parts.addArr(eleArr,div);

        return div;
        
    }

    const food1 = new Food('Vegan Double Cheese', '5$','Cheddar and parmesan cheese melted on top of up to 4 vegetable or mushroom toppings.',`${Pizza1}`);

    const food2 = new Food('Tropical "Margarita"','6$','Cheese, bacon strips, perejil and corn.',`${Pizza2}`);

    const food3 = new Food('Seaworld Pizza','8$','anchovies, tuna and shrimp with seasoning of your choice',`${Pizza3}`);

    const veganPizza = newFood(food1);
    const margarita = newFood(food2);
    const seaworld = newFood(food3);

    

    function makeMenuPage() {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');

        parts.addArr([veganPizza,margarita,seaworld],mainDiv);


        const header = document.querySelector('div#header');
        header.insertAdjacentElement('afterend',mainDiv);
    }

    return {
        newFood: newFood,
        Food: Food,
        make: makeMenuPage,
    }


})();