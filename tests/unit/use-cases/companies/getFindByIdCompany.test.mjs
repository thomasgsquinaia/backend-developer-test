import { describe, it, beforeAll, expect } from 'vitest'
import { config } from 'dotenv';
import Companies from '../../../../src/models/Companies';
import { describe, it, beforeAll, expect } from 'vitest'
import { Sequelize } from 'sequelize';
import { findById } from '../../../../src/use-cases/companies/getFindByIdCompany';

describe("Should test Companies", () => {
    beforeAll(async () => {
        config({path:'../.env.test'})
        const sequelize = new Sequelize({
            database: process.env.VITE_POSTGRES_DB,
            username: process.env.VITE_POSTGRES_USER,
            password: process.env.VITE_POSTGRES_PASSWORD,
            port: 5433,
            dialect: "postgres",
        })
        await Companies.init(sequelize);
        await sequelize.sync()
    });
    it('Should test find by id', async () => {
        const company_id = "6532742c-4176-48da-9c4a-35df2acdbfdb"
        const foundCompany = await Companies.findByPk(company_id);
        expect(foundCompany).toBeDefined();
        expect(foundCompany.id).toBe(company_id);
    });
    it('Should test dont find by id', async () => {
        const company_id = "6532742c-4176-48da-9c4a-35df2acdbfd1"
        const foundCompany = await Companies.findByPk(company_id);
        expect(foundCompany).toBeNull();
    });
})