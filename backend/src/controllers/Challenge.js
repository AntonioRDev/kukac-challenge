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

  getChange(req, res) {}

  getCEPs(req, res) {}

  saveVehicle(req, res) {}
}

function checkPalindrome(number) {
  for (let i = 0; i < number.length / 2; i++) {
    if (number[i] !== number[number.length - i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = ChallengeController;
