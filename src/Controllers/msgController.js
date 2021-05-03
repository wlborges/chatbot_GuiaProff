const { response } = require('express');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');




module.exports={
    async createSession(req, res){
        let sessionId = req.sessionId
        var sessionTime = new Date
        //console.log(req.sessionId)
        return res.status(200).json({sessionId, "sessionTime" : sessionTime.toISOString()})
        },

    async sendMessage(req, res){
      let result = req.result
        return res.status(200).json({result})
    }
}