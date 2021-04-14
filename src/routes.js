const {Router} = require('express');

const routes=Router();

//padrão
routes.get('/',(req,res) =>{
    return res.status(200).json({msg:"API em funcionamento"})
  })

  module.exports=routes; 