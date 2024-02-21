const useCaseCreateJob = require("../use-cases/jobs/createJob");
const useCaseUpdatePublishJob = require("../use-cases/jobs/updatePublishJob");
const useCaseUpdateJob = require("../use-cases/jobs/updateJob");
const useCaseUpdateArchiveJob = require("../use-cases/jobs/updateArchiveJob");
const useCaseDeleteJob = require("../use-cases/jobs/deleteJob");

module.exports = {
  createJob: async (req, res) => {
    try {
      const input = {
        company_id:req.body.company_id,
        title:req.body.title,
        description:req.body.description,
        location:req.body.location,
        notes:req.body.notes
      };
      const result = await useCaseCreateJob.create(input)
      return res.status(201).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
  updatePublishJob: async (req, res) => {
    try {
      const job_id = req.params.job_id;
      const result = await useCaseUpdatePublishJob.update(job_id)
      return res.status(201).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
  updateJob: async (req, res) => {
    try {
      const job_id = req.params.job_id;
      const input = {
        title:req.body.title,
        location:req.body.location,
        description:req.body.description
      }
      const result = await useCaseUpdateJob.update(input,job_id)
      return res.status(201).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
  updateArchiveJob: async (req, res) => {
    try {
      const job_id = req.params.job_id;
      const result = await useCaseUpdateArchiveJob.update(job_id)
      return res.status(201).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
  deleteJob: async (req, res) => {
    try {
      const job_id = req.params.job_id;
      const result = await useCaseDeleteJob.delete(job_id)
      return res.status(200).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
};

