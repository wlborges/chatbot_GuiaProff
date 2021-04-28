const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');




module.exports={
    async createSession(req, res,next){
        let sessionId = ''
        const assistant = new AssistantV2({
        version: '2020-09-24',
        authenticator: new IamAuthenticator({
            apikey: 'm5vemK5n0gBj3b8mSWzZNbT5uBLerEgaqlrk1OU8YAPL',
        }),
        serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/e11d1f95-6099-40f4-b840-5ccd92f2f115',
        });

        await assistant.createSession({
            assistantId: '00af6a77-24dc-4b21-95e9-13a884be1b15'
        })
        .then(res => {
            req.sessionId= res.result.session_id
            //console.log(sessionId)
            next()   
        })
        .catch(err => {
            //console.log(err);
            return res.status(400).json(err)
        });
            },

    async sendMessage(req, res, next){
        let sessionId = req.body.sessionId
        let text = req.body.text
        const assistant = new AssistantV2({
            version: '2020-09-24',
            authenticator: new IamAuthenticator({
            apikey: 'm5vemK5n0gBj3b8mSWzZNbT5uBLerEgaqlrk1OU8YAPL',
            }),
            serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/e11d1f95-6099-40f4-b840-5ccd92f2f115',
            });
          
          assistant.message({
            assistantId: '00af6a77-24dc-4b21-95e9-13a884be1b15',
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