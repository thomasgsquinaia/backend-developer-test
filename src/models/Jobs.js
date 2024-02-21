const  { DataTypes, Model, UUID, UUIDV4 } = require('sequelize');
class Jobs extends Model {
    static init(sequelize) {
        const tableConfig={ 
            sequelize, 
            schema: 'public',
            modelName: 'jobs',
            underscored:true
        }
        const tableDefinition={
            id:{
                type:DataTypes.UUID,
                defaultValue: UUIDV4,
                unique:true,
                allowNull: false,
                primaryKey: true
            },
            company_id:{
                type:DataTypes.STRING,
                allowNull: false
            },
            title:{
                type:DataTypes.STRING,
                allowNull: false
            },
            description:{
                type:DataTypes.STRING,
                allowNull: false
            },
            location:{
                type:DataTypes.STRING,
                allowNull: false
            },
            notes:{
                type:DataTypes.STRING,
                allowNull: true,
            },
            status:{
                type:DataTypes.STRING,
                defaultValue: "draft",
                allowNull: false
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
        this.hasOne(models.companies,{foreignKey:'company_id',foreignKeyConstraint:true,})
    }
}

module.exports = Jobs