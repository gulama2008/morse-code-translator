import { engToMorse, morseToEng,invalidInputErr } from './utils.js'

describe('English to Morse code translator',() => { 
    it('should return the right Morse code when give valid input', () => { 
        expect(engToMorse("hello world")).toBe(
          ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
        expect(engToMorse("How Are You")).toBe(
          ".... --- .-- / .- .-. . / -.-- --- ..-"
        );
        expect(engToMorse("DO YOU UNDERSTAND MORSE CODE")).toBe(
          "-.. --- / -.-- --- ..- / ..- -. -.. . .-. ... - .- -. -.. / -- --- .-. ... . / -.-. --- -.. ."
        );
    })
  it('should return an object contains error message of "Please enter only letters!" when input is not a letter', () => { 
    expect(() => { engToMorse('Hell2') }).toThrow(invalidInputErr);
    expect(() => {
      engToMorse("how are yo!");
    }).toThrow(invalidInputErr);
    expect(() => {
      engToMorse("5");
    }).toThrow(invalidInputErr);
  })
})