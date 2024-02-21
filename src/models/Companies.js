const { DataTypes, Model, UUIDV4 } = require('sequelize');
class Companies extends Model {
    static init(sequelize) {
        const tableConfig={ 
            sequelize, 
            schema: 'public',
            modelName: 'companies',
            underscored:true
        }
        const tableDefinition={
            id:{
                type:DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name:{
                type:DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            created_at:{
                type:DataTypes.DATE,
                defaultValue: false,
                allowNull: false
            },
            updated_at:{
                type:DataTypes.DATE,
                defaultValue: false,
                allowNull: false
            }
        }
        super.init(tableDefinition,tableConfig)
    }
    
    static associate(models) {
    }
}

module.exports = Companies