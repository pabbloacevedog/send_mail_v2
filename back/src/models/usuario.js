'use strict';

module.exports = function (sequelize, DataTypes) {
    const schema = {
        user_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        dni: {
            type: DataTypes.STRING(20)
        },
        name: {
            type: DataTypes.STRING(200)
        },
        user: {
            type: DataTypes.STRING(100)
        },
        password: {
            type: DataTypes.STRING(500)
        },
        email: {
            type: DataTypes.STRING(500)
        },
        phone: {
            type: DataTypes.STRING(20)
        },
		address: {
			type: DataTypes.STRING(500),
		},
		city: {
			type: DataTypes.STRING(500),
		},
		country: {
			type: DataTypes.STRING(500),
		},
        url_img: {
            type: DataTypes.STRING(1000)
        },
		url_img_history: {
            type: DataTypes.STRING(1000)
        },
        sent: {
            type: DataTypes.INTEGER(1)
        },
		instagram: {
            type: DataTypes.STRING(500)
        },
        facebook: {
            type: DataTypes.STRING(500)
        },
        whatsapp: {
            type: DataTypes.STRING(500)
        },
		realtive: {
            type: DataTypes.STRING(500)
        },
		relationship: {
            type: DataTypes.STRING(500)
        },
        creation_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        date_sent: {
            type: DataTypes.DATE
        },
		designated_wallet: {
			type: DataTypes.STRING(5000),
		},
    };
    const  index =  {
        indexes:[
            {
                unique: false,
                fields:['user_id','email']
            }
        ]
    }
    const User = sequelize.define('User',schema, {
        classMethods: {
            associate: function (models) {
                // User.belongsTo(models.Department, { foreignKey: { allowNull: false } });
            }
        },
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
        tableName: 'user',
        paranoid: false,
        // don't use camelcase for automatically added attributes but underscore style
        // so updatedAt will be updated_at
        underscored: true
    }, index);
    return User;
};
