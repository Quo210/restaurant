export { navbar };

const navbar = ( () => {

    function createNavbar(target,names,classN) {
        for (let i = 0; i < names.length; i++) {
            const newDiv = document.createElement('div');
            newDiv.textContent = names[i];
            newDiv.classList.add(`${classN}`)
            target.appendChild(newDiv);
        }
    }

    return {
        make: createNavbar,
    }

})();