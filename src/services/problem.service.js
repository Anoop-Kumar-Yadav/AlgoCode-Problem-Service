const NotFound = require("../errors/notFound.error");
const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. Sanitize the markdown
      problemData.description = sanitizeMarkdown(problemData.description);

      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await this.problemRepository.getProblem(id)
      return problem
    
    } catch (error) {
      throw error
    }
  }
  async getProblems() {
    try {
      const problems = await this.problemRepository.getProblems()
      return problems
    
    } catch (error) {
      throw error
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await this.problemRepository.deleteProblem(id)      
      
      if (deletedProblem === null) {
        throw new NotFound
      }
      return deletedProblem

    } catch (error) {
      throw error
    }
  }
}

module.exports = ProblemService;

/* 
Imagine your company decides to switch from MongoDB to PostgreSQL.
If you hard-coded the repository, you would have to rewrite parts of your Service layer. But with Dependency Injection, your Service layer stays exactly the same. You just write a new PostgresProblemRepository and inject that one into the constructor instead.

Passing the repository through the constructor separates the "what to do" (the Service) from the "how to do it" (the Repository)
*/
