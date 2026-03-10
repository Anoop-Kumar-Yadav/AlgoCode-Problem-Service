const { StatusCodes, INTERNAL_SERVER_ERROR } = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')
const { ProblemService } = require('../services/')
const { ProblemRepository } = require('../repositories/')

const problemService = new  ProblemService(new ProblemRepository)

// Executes on request : /api/v1/problems/ping
function pingProblemControllerCheck(req, res, next) {
    try {
        return res.json({
        message : "ping Controller is Up!"
    })
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body)
        
        return res.status( StatusCodes.OK ).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id)
        return res.status( StatusCodes.OK ).json({
            success: true,
            message: `Get a problem - ${problem.title}` ,
            error: {},
            data: problem
        })
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }   
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getProblems()
        console.log(problems);
        
        return res.status( StatusCodes.OK ).json({
            success: true,
            message: `Get all problems` ,
            error: {},
            data: problems
        })
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('deleteProblem')
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('updateProblem')
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,

    pingProblemControllerCheck
}