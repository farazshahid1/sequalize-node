const { DataTypes, UUIDV4 } = require("sequelize");

const vocabularyNameLength = 100
module.exports = (sequelize) => { sequelize.define(
  "vocabulary",
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
        type: DataTypes.STRING(vocabularyNameLength),
      }
  },
  {
    tableName: "vocabulary",
  }
)}
