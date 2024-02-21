import { config } from 'dotenv';
import Jobs from '../../../../src/models/Companies';
import { describe, it, beforeAll, expect } from 'vitest'
import { Sequelize } from 'sequelize';

describe("Should test Job", () => {
    beforeAll(async () => {
        config({path:'../.env.test'})
        const sequelize = new Sequelize({
            database: process.env.VITE_POSTGRES_DB,
            username: process.env.VITE_POSTGRES_USER,
            password: process.env.VITE_POSTGRES_PASSWORD,
            port: 5433,
            dialect: "postgres",
        })
        await Jobs.init(sequelize);
        await sequelize.sync()
    });
    
    it('Shoud test delete job', async () => {
        const job = "9b70eaca-1b8c-40d2-a98d-b2079a3e3c3d";
        const findJob = await Jobs.findOne({where: {id: job}});
        expect(findJob).toBeNull();
        if (findJob) {
            await findJob.destroy();
        }
        const deletedJob = await Jobs.findOne({ where: { id: job } });
        expect(deletedJob).toBeNull();
    })
})