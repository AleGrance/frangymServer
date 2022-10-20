module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_cliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ci_cliente: {
            type: DataTypes.STRING,
            unique: {
                msg: 'El CI ingresado ya existe!',
                fields: ['ci_cliente']
            },
            allowNull: false
        },
        estado_cliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_registro: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        fecha_vencimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });

    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Cliente;
};