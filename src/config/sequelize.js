const { Sequelize } = require('sequelize');
const Companies = require('../models/Companies');
const Jobs = require('../models/Jobs');
async function InitDatabase(){
    try{
        const sequelize = new Sequelize({
            database: process.env.POSTGRES_DB_NAME,
            username: process.env.POSTGRES_DB_USER_NAME,
            password: process.env.POSTGRES_PASS,
            host: process.env.POSTGRES_HOST,
            port: 5432,
            dialect: "postgres",
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }}
        })
        Jobs.init(sequelize)
        Companies.init(sequelize)
        await sequelize.sync({ force: false })
        return sequelize
    }
    catch(err){
        throw(err)
    }
}
module.exports = { InitDatabase }
