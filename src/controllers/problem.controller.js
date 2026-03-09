// Executes on request : /api/v1/problems/ping
function pingProblemControllerCheck(req, res) {
    return res.json({
        message : "ping Controller is Up!"
    })
}

function addProblem(req, res) {
    
}

function getProblem(req, res) {
    
}

function getProblems(req, res) {
    
}

function deleteProblem(req, res) {
    
}

function updateProblem(req, res) {
    
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,

    pingProblemControllerCheck
}