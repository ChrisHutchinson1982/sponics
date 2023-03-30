import sounds from "../sounds.json";
import words from "../words.json";

export default {
  sound: "",
  wordLength: 4,
  guess: "",

  init() {
    this.getSound();
  },

  changeSound() {
    this.getSound();
    this.clearGuess();
  },

  changeWordLength(e) {
    this.wordLength = parseInt(e.target.value);

    if (this.guess.length > this.wordLength) {
      this.guess = this.guess.slice(0, this.wordLength);
    }
  },

  submitGuess() {
    console.log(this.guess);
    console.log(this.wordLength);
    if (this.guess.length != this.wordLength) {
      console.log("Finish the word");
    } else if (!this.guess.includes(this.sound)) {
      console.log("Use the sound");
    } else if (words.includes(this.guess)) {
      console.log("You win");
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
      console.log(this.guess);
    }
  },

  clearGuess() {
    this.guess = "";
  },

  getSound() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
  },
};
