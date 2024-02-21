const Companies = require("../../models/Companies");

module.exports={
    async findById(id){
        try{
            const companies = await Companies.findByPk(id)
            if(!companies) {
                throw({
                  message:"Company is not found!",
                  status:404
                })
            }
            return companies;
        }
        catch(err){
            throw(err)
        }
    }
}