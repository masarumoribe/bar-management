module.exports = (sequelize, DataTypes) => {

    const InvItems = sequelize.define("InvItems", {
         name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         category: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         unit: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         cost: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
         quantity: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
    })

    return InvItems
}