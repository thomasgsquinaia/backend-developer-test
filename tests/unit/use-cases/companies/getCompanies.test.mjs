import { describe, it, beforeAll, expect } from 'vitest'
import { config } from 'dotenv';
import Companies from '../../../../src/models/Companies';
import { describe, it, beforeAll, expect } from 'vitest'
import { Sequelize } from 'sequelize';

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
    it('Should test fetch all companies', async () => {
        const allCompanies = await Companies.findAll();
        expect(Array.isArray(allCompanies)).toBeTruthy();
        expect(allCompanies.length).toBeGreaterThan(0);
    });
    it('Should test were not found companies', async () => {
        try {
            const allCompanies = await Companies.findAll();
            expect(allCompanies).toHaveLength(0)
            if(allCompanies.length > 0) {
                throw new Error("Companies were not found")
            }
        } catch (err) {
            expect(err).toBeDefined();
        }
    });
})