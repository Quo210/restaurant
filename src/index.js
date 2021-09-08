import './convenience.js';
import convenientModule from './convenience.js';

const myModule = ( () => {
    function simpleOne() {
        let a = trial;
        console.log(a)
    }

    const sum = (a,b) => {
        console.log(a+b)
    }

    return {
        one: simpleOne,
        sum: sum,
    }
})();

myModule.one();
convenientModule.say('Hello')