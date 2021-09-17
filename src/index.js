import { homeModule } from "./homepage";
import { navbar } from "./navbar";
import '../styles/style.css';
import { parts } from "./parts";
import { menuModule } from "./menu";
import { contactModule } from "./contact";

//homeModule.make();

const header = document.querySelector('div#header');
const tabsArray = ['Home','Menu','Contact'];

navbar.make(header,tabsArray,'navb')

const footer = document.querySelector('div#footer');
const footArray = ['Thanks to','And','By-Quo210'];

navbar.make(footer,footArray,'navb');

const tabHandler = (() => {
    const headerBtns = Array.from( document.querySelectorAll('div#header > div.navb') )

    const BTN1 = headerBtns[0];
    const BTN2 = headerBtns[1];
    const BTN3 = headerBtns[2];

    const test = () => { 
        }

    function addListeners() {
        BTN1.onclick = () => {
            changeTab()
            homeModule.make()
        }
        BTN2.onclick = () => {
            changeTab();
            menuModule.make();
        };
        BTN3.onclick = () => {
            changeTab();
            contactModule.make();
        }
    }
    
    function changeTab() {
        let myDiv = parts.get();
        if (myDiv == null) {
            return
        } else {
            myDiv.remove()
        }
    }

    return {
        test: test,
        handle: addListeners,
    }
})();

tabHandler.handle();