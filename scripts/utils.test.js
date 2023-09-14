import { engToMorse, morseToEng } from './utils.js'

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
})