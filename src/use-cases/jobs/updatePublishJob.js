
const Jobs = require("../../models/Jobs");

module.exports={
    async update(job_id){
        try{
            const updateRow={status: "published"};
            const job = await Jobs.findOne({where: {id: job_id}})
            if(job.dataValues.status != "draft") {
                throw ({
                    message:"Job 'status' is not a draft!", 
                    status: 404
                });
            }
            await Jobs.update(updateRow, {
                where: {
                    id: job_id
                }
            });
            return {message:"The job was published!"};
        }
        catch(err){
            throw(err)
        }
    }
}