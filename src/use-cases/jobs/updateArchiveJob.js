
const Jobs = require("../../models/Jobs");

module.exports={
    async update(job_id){
        try{
            const job = await Jobs.findOne({where: {id: job_id}})
            if(job.dataValues.status == "archived"){
              throw ({
                message:"Job Status archived!", 
                status: 400
              });
            }
            job.status = "archived"
            await job.save()
            
            return job;
        }
        catch(err){
            throw(err)
        }
    }
}