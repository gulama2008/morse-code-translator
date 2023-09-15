import { engToMorse, morseToEng } from "./utils.js";

const rawData = '{"A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".","F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.","O": "---","P": ".--.","Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."}'
const textEng = document.querySelector('#textEng');
const textMorse = document.querySelector('#textMorse');

const code = JSON.parse(rawData);
console.log(code);

const addTranslateFunc = (e,elementDestination,func) => { 
    const str = e.target.value;
    try {
        const newStr = func(str);
        elementDestination.value = newStr;
    } catch (error) { 
        console.log(str);
        alert(error.message);
        e.target.value=str.substring(0, str.length - 1)
    }   
}

textEng.addEventListener('input', e => { addTranslateFunc(e,textMorse,engToMorse)})

textMorse.addEventListener('input', e => {addTranslateFunc(e,textEng,morseToEng)});


