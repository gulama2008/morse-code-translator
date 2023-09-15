import { engToMorse, morseToEng,invalidEngInputErr,invalidMorseInputErr } from './utils.js'

describe('English to Morse code translator',() => { 
    it('should return the right Morse code when give valid input', () => { 
        expect(engToMorse("hello world")).toBe(
          ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
        expect(engToMorse("How Are You")).toBe(
          ".... --- .-- / .- .-. . / -.-- --- ..-"
        );
        expect(engToMorse("nice 2 meet U")).toBe(
          "-. .. -.-. . / ..--- / -- . . - / ..-"
        );
    })
  it('should throw an error contains error message of "Please enter only letter or number!" when input is not valid', () => { 
    expect(() => { engToMorse('Hello~') }).toThrow(invalidEngInputErr);
    expect(() => {
      engToMorse("how are yo!");
    }).toThrow(invalidEngInputErr);
    expect(() => {
      engToMorse("haha?");
    }).toThrow(invalidEngInputErr);
  })
})

describe("Morse to English code translator", () => {
  it("should return the right English word when give valid input", () => {
    expect(morseToEng(".... .. / .... . .-.. .-.. ---")).toBe("HI HELLO");
    expect(morseToEng(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe("HOW ARE YOU");
    expect(morseToEng("--. --- --- -.. / - --- / ... . . / -.-- --- ..-")).toBe("GOOD TO SEE YOU");
  })
  
  it('should throw an error contains error message of "Please enter only . or -" when input is not valid', () => {
    expect(() => {
      morseToEng("123");
    }).toThrow(invalidMorseInputErr);
    expect(() => {
      morseToEng("../-!");
    }).toThrow(invalidMorseInputErr);
    expect(() => {
      morseToEng("abc");
    }).toThrow(invalidMorseInputErr);
  });
})