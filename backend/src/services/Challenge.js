const axios = require("axios");
const fs = require("fs");

class ChallengeSerivice {
  checkPalindrome(number) {
    for (let i = 0; i < number.length / 2; i++) {
      if (number[i] !== number[number.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  getBanknotes(change) {
    const notes = [100, 10, 1];
    let counter100 = 0;
    let counter10 = 0;
    let counter1 = 0;
    let changeCounter = change;

    let i = 0;
    while (i < 3) {
      if (changeCounter - notes[i] >= 0) {
        changeCounter -= notes[i];

        if (notes[i] === 100) {
          counter100++;
        } else if (notes[i] === 10) {
          counter10++;
        } else {
          counter1++;
        }
      } else {
        i++;
      }
    }

    const minNotes = counter1 + counter10 + counter100;

    return {
      change,
      minNotes,
      counter1,
      counter10,
      counter100
    };
  }

  async getCeps(search) {
    const ceps = [];

    for (let i = 0; i < 5; i++) {
      await axios
        .get(`https://viacep.com.br/ws/${search[i]}/json/`)
        .then(response => ceps.push(response.data))
        .catch(err => ceps.push({ erro: true }));
    }

    return ceps;
  }

  writeFile(json) {
    fs.writeFileSync("vehicle.json", json, "utf-8", err => {
      if (!err) {
        return true;
      } else {
        return false;
      }
    });
    return true;
  }
}

module.exports = ChallengeSerivice;
