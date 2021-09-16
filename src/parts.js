export const parts = (() => {

    function getWorkingDiv() {
        return document.querySelector('div.main');
    }

    function appendFromArray(arr,target) {
        for (let i = 0; i < arr.length; i++) {
            target.appendChild(arr[i]);
        }
    }

    function generateTemplate() {
        const mainDiv = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const description = document.createElement('p');
        const img = document.createElement('img');
        const imgDiv = document.createElement('div');

        appendFromArray([img],imgDiv);
        appendFromArray([h1,h2,description,imgDiv],mainDiv);
        mainDiv.classList.add('main');

        return [h1,h2,description,img,imgDiv,mainDiv];
    }

    return {
        get: getWorkingDiv,
        addArr: appendFromArray,
        template: generateTemplate,
    }

})();