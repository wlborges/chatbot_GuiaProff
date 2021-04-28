module.exports={
    async index(req,res){
        return res.status(200).json({msg:"API em funcionamento"})
    }
}