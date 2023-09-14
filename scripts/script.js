import { engToMorse, morseToEng } from "./utils.js";

const rawData = '{"A": ".-","B": "-...","C": "-.-.","D": "-..","E": ".","F": "..-.","G": "--.","H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.","O": "---","P": ".--.","Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","W": ".--","X": "-..-","Y": "-.--","Z": "--.."}'
const textEng = document.querySelector('#textEng');
const textMorse = document.querySelector('#textMorse');

const code = JSON.parse(rawData);
console.log(code);

textEng.addEventListener('keyup', e => { 
    const engStr = textEng.value;
    try {
        const morseStr = engToMorse(engStr);
        textMorse.value = morseStr;
    } catch (e) { 
        alert(e.message);
        textEng.value = engStr.substring(0, engStr.length - 1);
    }
});

textMorse.addEventListener('keyup', e => morseToEng(textMorse, textEng));


