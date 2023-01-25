const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../lib/database");

console.warn("VOCAB MODEL");
const vocabularyNameLength = 100

const Vocabulary = sequelize.define(
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
);
// Vocabulary.sync()

const vocabularyQueries = {};

module.exports = {Vocabulary, vocabularyQueries};