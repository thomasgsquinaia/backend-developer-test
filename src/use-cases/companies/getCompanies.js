const Companies = require("../../models/Companies");

module.exports={
    async list(){
        try{
            const companies = await Companies.findAll()
            if(!companies) {
                throw (
                    {message:"Companies were not found!", 
                    status: 404
                });
            }
            return companies;
        }
        catch(err){
            throw(err)
        }
    }
}