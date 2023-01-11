const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../database");

const PackageRelationship = db.define(
  "package_relationship",
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    type: {
      type: DataTypes.TEXT,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.TEXT
    },
  },
  {
    tableName: "package_relationship",
  }
);  

module.exports = PackageRelationship
