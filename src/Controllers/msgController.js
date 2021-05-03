const { response } = require('express');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { get } = require('../routes');




module.exports={
    async createSession(req, res){
        var sessionId = req.sessionId
        var creationTime = new Date
        return res.status(200).json({sessionId, "creationTime" : creationTime.toISOString()})
        },

    async sendMessage(req, res){
      let result = req.result
        return res.status(200).json({result})
    }
}