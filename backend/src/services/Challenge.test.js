const ChallegeService = require("./Challenge");

const challengeService = new ChallegeService();

// Testes
test("Checks if a number is palindrome", function() {
  expect(challengeService.checkPalindrome(101)).toBe(true);
});

test("Tests the minimum number of change notes", function() {
  expect(challengeService.getBanknotes(137)).toStrictEqual({
    change: 137,
    minNotes: 11,
    counter1: 7,
    counter10: 3,
    counter100: 1
  });
});

test("Writes a json file", function() {
  expect(challengeService.writeFile({ test: "test" })).toBe(true);
});
