
const code = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
};
  
export const invalidEngInputErr = new Error("Please enter letters and numbers only!");
export const invalidMorseInputErr=new Error('Please enter only . or -')
export const getKeyByValue = (obj,value) => { 
    return Object.keys(obj).find(key => obj[key] === value);
}
    

export const engToMorse = (engStr) => {
  const charArr = engStr.trim().toUpperCase().split("");
  if (/[a-zA-Z0-9]/.test(charArr[charArr.length - 1])) {
    const morseStr = charArr.map((char) => code[char]).join(" ");
    return morseStr;
  } else {
    throw invalidEngInputErr;
  }
};

export const morseToEng = (morseStr) => {
  const cleanedMorseStr = morseStr.trim();
  if (/[\.\-/]/.test(cleanedMorseStr[cleanedMorseStr.length - 1])||cleanedMorseStr==="") {
    const morseArr = cleanedMorseStr.split("/");
    const nestedMorseArr = morseArr.map((word) => word.split(" "));
    const translatedMorseArr = nestedMorseArr.map((nestedArr) => {
      return nestedArr
        .map((str) => {
          return getKeyByValue(code, str);
        })
        .join("");
    });
    const engStr = translatedMorseArr.join(" ");
    return engStr;
  } else {
    throw invalidMorseInputErr;
  }
};

