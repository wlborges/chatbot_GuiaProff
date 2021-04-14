const {Router} = require('express');

const routes=Router();

//padrão
routes.get('/',(req,res) =>{
    return res.json({status:200,msg:'API em funcionamento'})
  })

  module.exports=routes; 