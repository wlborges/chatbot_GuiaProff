const { response } = require('express');
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
const { get } = require('../routes');




module.exports={
    async createSession(req, res){
        var sessionId = req.sessionId
        var creationTime = new Date
        return res.status(201).json({sessionId, "creationTime" : creationTime.toISOString()})
        },

    async sendMessage(req, res){
      try {
          var generic = req.result
        if (generic == "") {
            return res.status(200).json({"generic":[{"response_type": "text","text": "Mensagem não compreendida pelo GuiaProff!"}]})
        } else {
            return res.status(200).json({generic})
        }
      } catch (error) {
          return res.status(400).json({"generic":[{"response_type": "text","text": "Parâmetros inválidos!"}]})
      }
    }
}