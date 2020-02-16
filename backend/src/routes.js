//imports
const express = require("express");
const ChallengeController = require("./controllers/Challenge");

//consts
const challengeController = new ChallengeController();
const routes = express.Router();

//routes
routes.get("/challenges", challengeController.index);
routes.get(
  "/challenges/getPalindromes/:init/:end",
  challengeController.getPalindromes
);
routes.get(
  "/challenges/getChange/:buyValue/:deliveredValue",
  challengeController.getChange
);
routes.get(
  "/challenges/getCEPs/:cep1/:cep2/:cep3/:cep4/:cep5",
  challengeController.getCEPs
);

routes.post("/challenges/saveVehicle", challengeController.saveVehicle);

module.exports = routes;
