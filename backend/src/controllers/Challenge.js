const axios = require("axios");
const fs = require("fs");

class ChallengeController {
  index(req, res) {
    res.status(200).json({
      ok: true
    });
  }

  getPalindromes(req, res) {
    const init = Number(req.params.init);
    const end = Number(req.params.end);

    const palindromes = [];

    for (let i = init; i <= end; i++) {
      if (checkPalindrome(i.toString())) {
        palindromes.push(i);
      }
    }

    return res.status(200).json(palindromes);
  }

  getChange(req, res) {
    const buyValue = Number(req.params.buyValue);
    const deliveredValue = Number(req.params.deliveredValue);

    const change = deliveredValue - buyValue;

    const banknotes = getBanknotes(change);

    return res.status(200).json(banknotes);
  }

  async getCEPs(req, res) {
    const cep1 = req.params.cep1;
    const cep2 = req.params.cep2;
    const cep3 = req.params.cep3;
    const cep4 = req.params.cep4;
    const cep5 = req.params.cep5;

    const search = [cep1, cep2, cep3, cep4, cep5];
    const ceps = [];

    for (let i = 0; i < 5; i++) {
      await axios
        .get(`https://viacep.com.br/ws/${search[i]}/json/`)
        .then(response => ceps.push(response.data))
        .catch(err => ceps.push({ erro: true }));
    }

    return res.status(200).json(ceps);
  }

  saveVehicle(req, res) {
    const vehicle = req.body;

    if (vehicle) {
      const json = JSON.stringify(vehicle);

      fs.writeFile("vehicle.json", json, "utf-8", err => {
        if (!err) {
          return res.status(200);
        } else {
          return res.status(500);
        }
      });
    }
    return res.status(500);
  }
}

function checkPalindrome(number) {
  for (let i = 0; i < number.length / 2; i++) {
    if (number[i] !== number[number.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function getBanknotes(change) {
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

module.exports = ChallengeController;
