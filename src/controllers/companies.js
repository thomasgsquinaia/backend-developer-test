const useCaseGetCompanies = require("../use-cases/companies/getCompanies");
const useCaseGetFindByIdCompanies = require("../use-cases/companies/getFindByIdCompany");

module.exports = {
  getCompanies: async (req, res) => {
    try {
      const result = await useCaseGetCompanies.list()
      return res.status(200).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  },
  getFindByIdCompany: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await useCaseGetFindByIdCompanies.findById(id)
      return res.status(200).json(result);
    } catch (err) {
      let statusCode = err.status || 500
      return res.status(statusCode).json(err);
    }
  }
};
