import sounds from "../sounds.json";

export default {
  sound: "",
  wordLength: 4,
  guess: "",

  init() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
    this.guess = "";
  },

  changeWordLength(e) {
    this.wordLength = parseInt(e.target.value);
    this.guess = "";
  },

  handleKeyup(e) {
    if (e.key === "Backspace") {
      this.guess = this.guess.slice(0, this.guess.length - 1);
      return;
    }

    if (this.guess.length < this.wordLength && e.key.match(/^[A-z]$/)) {
      this.guess = this.guess + e.key.toLowerCase();
    }
  },
};
