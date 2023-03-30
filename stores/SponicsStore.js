import sounds from "../sounds.json";
import words from "../words.json";

export default {
  sound: "a",
  wordLength: 4,
  guess: "",
  resultMessage: "?",

  // init() {
  //   this.getSound();
  // },

  changeSound() {
    this.getSound();
    this.clearGuess();
    this.resultMessage = "?";
  },

  changeWordLength(e) {
    this.wordLength = parseInt(e.target.value);

    if (this.guess.length > this.wordLength) {
      this.guess = this.guess.slice(0, this.wordLength);
    }
  },

  submitGuess() {
    if (this.guess.length != this.wordLength) {
      this.resultMessage = "Too short!";
    } else if (!this.guess.includes(this.sound)) {
      this.resultMessage = `Where is "${this.sound}"?`;
    } else if (words.includes(this.guess)) {
      this.resultMessage = "✓";
    } else {
      this.resultMessage = "✖";
      h;
    }
  },

  handleKeyup(e) {
    if (e.key === "Enter") {
      return this.submitGuess();
    }

    if (e.key === "Backspace") {
      this.guess = this.guess.slice(0, this.guess.length - 1);
      return;
    }

    if (this.guess.length < this.wordLength && e.key.match(/^[A-z]$/)) {
      this.guess = this.guess + e.key.toLowerCase();
    }
  },

  clearGuess() {
    this.guess = "";
  },

  getSound() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
  },
};
