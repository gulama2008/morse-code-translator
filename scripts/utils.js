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
  W: ".--",
  X: "-..-",
  Y: "-.--",
    Z: "--..",
    " ": '/',
};
  //abcde
export const invalidInputErr = new Error("Please enter only letters!");

export const getKeyByValue = (obj,value) => { 
    return Object.keys(obj).find(key => obj[key] === value);
}
    
// };
// export const engToMorse = (engStr) => {
//   const charArr = engStr.trim().toUpperCase().split("");
//   if (/[a-zA-Z]/.test(charArr[charArr.length - 1])) {
//     const morseStr = charArr.map((char) => code[char]).join(" ");
//     return morseStr;
//   } else {
//     const newEngStr = engStr.substring(0, engStr.length - 1);
//     return {
//       amendedContent:newEngStr,
//       errorMessage:"Please enter only letters!"
//     };
//   }
// };

export const engToMorse = (engStr) => {
  const charArr = engStr.trim().toUpperCase().split("");
  if (/[a-zA-Z]/.test(charArr[charArr.length - 1])) {
    const morseStr = charArr.map((char) => code[char]).join(" ");
    return morseStr;
  } else {
    throw invalidInputErr;
  }
};
//    .... ../-.-- --- ..-  --> HI YOU  ['.... ..','-.-- --- ..-']-->[['....','..'],['-.-- ---','..-']]
//-->[[H,I],[Y,O,U]]-->['HI','YOU']
export const morseToEng = (elementSource,elementDestination) => {
    const wordArr = elementSource.value.trim().split('/');
    const nestedWordArr = wordArr.map(word => word.split(' '));
    const translatedWordArr = nestedWordArr.map(nestedArr => { 
       return nestedArr.map(morseStr => { return getKeyByValue(code, morseStr) }).join('');
    })
    const engStr = translatedWordArr.join(' ');
    elementDestination.value = engStr;
};
