const { StatusCodes } = require('http-status-codes')

const NotImplemented = require('../errors/notImplemented.error')

// Executes on request : /api/v1/problems/ping
function pingProblemControllerCheck(req, res, next) {
    try {
        throw new NotImplemented('pingProblemControllerCheck')
    } catch (error) {
        next(error) // pass to errorhandler the next middleware
    }
    
    // return res.json({
    //     message : "ping Controller is Up!"
    // })
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "NOT IMPLEMENTED"
    })
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "NOT IMPLEMENTED"
    })    
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "NOT IMPLEMENTED"
    }) 
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "NOT IMPLEMENTED"
    })
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : "NOT IMPLEMENTED"
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,

    pingProblemControllerCheck
}