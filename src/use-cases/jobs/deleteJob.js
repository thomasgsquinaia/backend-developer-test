
const Jobs = require("../../models/Jobs");

module.exports = {
  async delete(job_id) {
    try {
      const job = await Jobs.findOne({ where: { id: job_id } });
      if (!job) {
        throw ({ 
            message: "Job is not find!", 
            status: 404 
        });
      }
      if (job.dataValues.status != "draft") {
        throw ({ 
            message: "Job 'status' is different from draft!", 
            status: 404 
        });
      }
      await job.destroy();

      return job;
    } catch (err) {
      throw err;
    }
  },
};