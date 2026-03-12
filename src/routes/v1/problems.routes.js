const express = require('express')

const { problemController } = require('../../controllers/index') 

const problemRouter = express.Router()

// If any request comes and route continues with /ping , we ,map it to pingProblemControllerCheck callBack
problemRouter.get('/ping',problemController.pingProblemControllerCheck)

problemRouter.get('/',problemController.getProblems)
problemRouter.get('/:id',problemController.getProblem)

problemRouter.post('/',problemController.addProblem)
problemRouter.delete('/:id',problemController.deleteProblem)
problemRouter.put('/:id',problemController.updateProblem)

problemRouter.put('/testcases/:id',problemController.addTestCase)



module.exports = problemRouter