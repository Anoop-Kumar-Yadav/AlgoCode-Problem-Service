const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models/");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create(problemData);
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      return problem;
    } catch (error) {
      throw new NotFound;
    }
  }

  async getProblems() {
    try {
      const problem = await Problem.find();
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      return deletedProblem

    } catch (error) {
      throw NotFound;
    }
  }

  async updateProblem(id , updatedFieldValueObject) {
    try {
      const updatedDoc = await Problem.findByIdAndUpdate(id,{$set : updatedFieldValueObject},{returnDocument: true});
      return updatedDoc

    } catch (error) {
      throw NotFound;
    }
  }
}

module.exports = ProblemRepository;
