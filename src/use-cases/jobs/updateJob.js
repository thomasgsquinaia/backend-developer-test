
const Jobs = require("../../models/Jobs");

module.exports={
    async update(input, job_id){
        try{
            const {title, location, description} = input
            const job = await Jobs.findOne({where: {id: job_id}})
            if(!job) {
                throw ({
                    message:"Job not is found!", 
                    status:400
                });
            }
            if(title) job.title = title;
            if(location) job.location = location;
            if(description) job.description = description;
            await job.save()

            return job;
        }
        catch(err){
            throw(err)
        }
    }
}