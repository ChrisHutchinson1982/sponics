import sounds from "../sounds.json";

export default {
  sound: "",
  wordLength: 4,

  init() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
  },

  changeWordLength(e) {
    this.wordLength = parseInt(e.target.value);
  },
};
