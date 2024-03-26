'use strict';

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    const amount = this.playTime + hours;
  },

  getInfo() {
    return `${Username} has ${amount} active hours!`;
  },
};

