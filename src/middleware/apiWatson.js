const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');




module.exports={
    async createSession(req, res,next){
        let sessionId = ''
        const assistant = new AssistantV2({
        version: '2020-09-24',
        authenticator: new IamAuthenticator({
            apikey: process.env.APIKEY,
        }),
        serviceUrl: process.env.SERVICEURL,
        });

        await assistant.createSession({
            assistantId: process.env.ASSISTANTID
        })
        .then(res => {
            req.sessionId= res.result.session_id
            //console.log(sessionId)
            next()   
        })
        .catch(err => {
            //console.log(err);
            return res.status(err.status).json({err,"apikey":process.env.APIKEY,assistantId: process.env.ASSISTANTID, serviceUrl: process.env.SERVICEURL})
        });
            },

    async sendMessage(req, res, next){
        let sessionId = req.body.sessionId
        let text = req.body.text
        const assistant = new AssistantV2({
            version: '2020-09-24',
            authenticator: new IamAuthenticator({
            apikey: process.env.APIKEY,
            }),
            serviceUrl: process.env.SERVICEURL,
            });
          
          assistant.message({
            assistantId: process.env.ASSISTANTID,
            sessionId,
            input: {
              'message_type': 'text',
              'text': text
              }
            })
            .then(res => {
              req.result = res.result
              next()
            })
            .catch(err => {
              //console.log(err);
              return res.status(err.status).json(err)
            });
    }
}