const Jobs = require("../models/Jobs");
const path = require("path");
const useCaseGetFeed = require("../use-cases/feed/getFeed");
const useCaseGenerateFeed = require("../use-cases/feed/generateFeed");

module.exports = {
  getFeed: async (req, res) => {
    try {
      const pathDefault = path.resolve("./cache/file.json");
      const result = await useCaseGetFeed.get(pathDefault)
      return res.status(200).json(result.toString());
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  generateFeed: async (req, res) => {
    try {
      const job = await Jobs.findAll({where: {status : "published"}})
      const result = await useCaseGenerateFeed.generate(job)
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  },
};
