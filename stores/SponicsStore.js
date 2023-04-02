import sounds from "../sounds.json";
import words from "../words.json";

export default {
  sound: "a",
  wordLength: 3,
  guess: "",
  resultMessage: `Spell a word using "a"`,

  init() {
    this.clearGuess();
    this.resetMessage();
  },

  changeSound() {
    this.getSound();
    this.clearGuess();
    this.resetMessage();
  },

  changeWordLength(e) {
    this.wordLength = parseInt(e.target.value);

    if (this.guess.length > this.wordLength) {
      this.guess = this.guess.slice(0, this.wordLength);
    }
  },

  submitGuess() {
    this.resultMessage =
      this.guess.length != this.wordLength
        ? "Too short!"
        : !this.guess.includes(this.sound)
        ? `Where is "${this.sound}"?`
        : words.includes(this.guess)
        ? "Correct, well done!"
        : "Not a word, try again...";
  },

  handleKeyup(e) {
    // if (e.key === "Enter") {
    //   return this.submitGuess();
    // }

    if (e.key === "Backspace") {
      this.guess = this.guess.slice(0, this.guess.length - 1);
      return;
    }

    if (this.guess.length < this.wordLength && e.key.match(/^[A-z]$/)) {
      this.guess = this.guess + e.key.toLowerCase();
    }
  },

  handleQwerty(e) {
    // if (e.key === "Enter") {
    //   return this.submitGuess();
    // }

    if (e.target.value === "⌫") {
      this.guess = this.guess.slice(0, this.guess.length - 1);
      return;
    }

    if (
      this.guess.length < this.wordLength &&
      e.target.value.match(/^[A-z]$/)
    ) {
      this.guess = this.guess + e.target.value.toLowerCase();
    }
  },

  clearGuess() {
    this.guess = "";
  },

  getSound() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
  },

  resetMessage() {
    this.resultMessage = `Spell a word using "${this.sound}"`;
  },
};
