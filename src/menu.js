import { parts } from "./parts";

export const menuModule = (()=>{
    class Food {
        constructor(name,price,description,imgdir) {
            name: name;
            price: price;
            tag: description;
            image: imgdir;
        }
    }

    function newFood(food) {
        //Create the DOM Elements
        const a = parts.template(); // [h1,h2,description,img,imgDiv,mainDiv];

        const div = a[5];
        const h1 = a[0];
        const h2 = a[1];
        const imgDiv = a[4]
        const img = a[3];
        const description = a[2];

        //Add Content
        h1.textContent = food.name;
        h2.textContent = food.price;
        description.textContent = food.tag;
        img.setAttribute('src',`${food.image}`);
        

        // //Append them together
        imgDiv.appendChild(img);
        const eleArr = [h1,h2,description,imgDiv];
        
    }

    return {
        test: newFood,
    }


})();