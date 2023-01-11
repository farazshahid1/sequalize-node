const { DataTypes, UUIDV4 } = require("sequelize");

const tagNameLength = 100
module.exports = (sequelize) => {
    const {vocabulary} = sequelize.models
    console.log("tag check: ", sequelize.models)
   const Tags = sequelize.define(
        "tag",
        {
            id: {
                type: DataTypes.TEXT,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            name: {
                type: DataTypes.STRING(tagNameLength),
                unique: true,
                allowNull: false
            }
        },
        {
            tableName: "tag",
        }
    )

    vocabulary.hasMany(Tags,{
        foreignKey:{name:"vocabulary_id",type:DataTypes.STRING(tagNameLength)}
    });
    // Tags.belongsTo(vocabulary,{
    //     foreignKey:"vocabulary_id"
    // });

}
