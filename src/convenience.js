export default convenientModule;

const convenientModule = ( () => {
    function mkEle(str) {
        return document.createElement(`${str}`)
    }

    function joinChild(parent,child) {
        parent.appendChild(child)
    }

    function sayThis(str) {
        console.log(str);
    }

    //function trial

    return {
        mkEle: mkEle,
        joinChild: joinChild,
        say: sayThis,
    }
})();