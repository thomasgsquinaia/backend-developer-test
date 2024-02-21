const Companies = require("../../models/Companies");
const Jobs = require("../../models/Jobs");

module.exports = {
  async create(input) {
    try {
      const { company_id, title, location, description, notes } = input;
      const idCompany = await Companies.findOne({ where: { id: company_id } });
      if (!idCompany) {
        throw ({ 
          message: "'company_id is not found!", 
          status: 400 
        });
      }
      const createJob = await Jobs.create({company_id, title, location, description, notes});
      return createJob;
    } catch (err) {
      throw (err);
    }
  },
};
