module.exports={
    async index(req,res){
        let time = new Date
        return res.status(200).json({msg:"API em funcionamento", "time": time.toISOString()})
    }
}