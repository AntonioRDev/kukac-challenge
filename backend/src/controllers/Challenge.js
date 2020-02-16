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

  saveVehicle(req, res) {}

  getCEPs(req, res) {}
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
