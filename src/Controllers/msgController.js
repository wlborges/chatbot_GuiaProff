const { response } = require('express');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');




module.exports={
    async createSession(req, res){
        let sessionId = req.sessionId
        var timeInMs = Date.now();
        //console.log(req.sessionId)
        return res.status(200).json({sessionId, timeInMs})
        },

    async sendMessage(req, res){
      let result = req.result
        return res.status(200).json({result})
    }
}