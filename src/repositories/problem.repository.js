const { Problem } = require('../models/')

class ProblemRepository {
    async createProblem(problemData){
        try {

            const problem = await Problem.create(problemData)
            return problem

        } catch (error) {
            throw error
        
        }
    }
}

module.exports = ProblemRepository