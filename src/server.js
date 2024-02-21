require("dotenv").config();
const {App}=require('./app')
const {InitDatabase}=require('./config/sequelize')
async function main(){
    const db=await InitDatabase()
    const app = new App();
    app.init()
}
main()


