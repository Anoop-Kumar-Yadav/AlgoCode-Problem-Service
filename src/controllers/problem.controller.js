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
        
        return res.status( 200 ).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('getProblem')
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }   
}

function getProblems(req, res, next) {
    try {
        throw new NotImplemented('getProblems')
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