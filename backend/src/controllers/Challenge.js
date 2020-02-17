const ChallengeService = require("../services/Challenge");
const fs = require("fs");

class ChallengeController {
  constructor() {
    this.challengeService = new ChallengeService();
    this.getPalindromes = this.getPalindromes.bind(this);
    this.getChange = this.getChange.bind(this);
    this.getCEPs = this.getCEPs.bind(this);
    this.saveVehicle = this.saveVehicle.bind(this);
  }

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
      if (this.challengeService.checkPalindrome(i.toString())) {
        palindromes.push(i);
      }
    }

    return res.status(200).json(palindromes);
  }

  getChange(req, res) {
    const buyValue = Number(req.params.buyValue);
    const deliveredValue = Number(req.params.deliveredValue);

    const change = deliveredValue - buyValue;

    const banknotes = this.challengeService.getBanknotes(change);

    return res.status(200).json(banknotes);
  }

  async getCEPs(req, res) {
    const cep1 = req.params.cep1;
    const cep2 = req.params.cep2;
    const cep3 = req.params.cep3;
    const cep4 = req.params.cep4;
    const cep5 = req.params.cep5;

    const search = [cep1, cep2, cep3, cep4, cep5];
    const ceps = await this.challengeService.getCeps(search);

    return res.status(200).json(ceps);
  }

  saveVehicle(req, res) {
    const vehicle = req.body;

    if (vehicle) {
      const json = JSON.stringify(vehicle);

      const fileWrited = this.challengeService.writeFile(json);

      if (fileWrited) {
        res.status(200);
      }
      return res.status(500);
    }
    return res.status(500);
  }
}

module.exports = ChallengeController;
