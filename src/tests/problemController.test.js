const problemController = require("../controllers/problem.controller");
const problemService = require("../services/problem.service");

const { statusCodes } = require("http-status-codes");

jest.mock("../services/problem.service.js");
describe("test", () => {
  beforeEach(() => {
    res = {};
    req = {
      status: jest.fn(() => {}),
      json: jest.fn(() => {}),
    };
    next = jest.fn();
  });
});

test("should get all problems", async () => {
  const problems = [];
  problemService.prototype.getProblems.mockResolvedValue();
});
