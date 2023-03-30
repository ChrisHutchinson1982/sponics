import sounds from "../sounds.json";
import words from "../words.json";

export default {
  sound: "a",
  wordLength: 4,
  guess: "",
  resultMessage: "?",

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
        ? "✓"
        : "✖";
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

  resetMessage() {
    this.resultMessage = "?";
  },
};
