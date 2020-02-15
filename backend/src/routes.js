const express = require("express");
const ChallengeController = require("./controllers/Challenge");

const challengeController = new ChallengeController();

const routes = express.Router();

routes.get("/challenges", challengeController.index);
routes.get(
  "/challenges/getPalindromes/:init/:end",
  challengeController.getPalindromes
);
routes.get("/challenges/getChange", challengeController.getChange);
routes.get("/challenges/getCEPs", challengeController.getCEPs);

routes.post("/challenges", challengeController.saveVehicle);

module.exports = routes;
