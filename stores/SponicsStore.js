import sounds from "../sounds.json";

export default {
  sound: "",
  init() {
    this.sound = sounds[Math.floor(Math.random() * sounds.length)];
  },
};
