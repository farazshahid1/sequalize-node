const { DataTypes, UUIDV4 } = require("sequelize");
// const db = require("../database");
// const Package = require('./package.model')
// const User = require('./user.model')


module.exports = (sequelize) => { 
  const {package,user} = sequelize.models
  console.log("sequlize.models: ", sequelize.models)
  
  sequelize.define(
  "package_member",
  {
    package_id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      references: {
        model: package,
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      references: {
        model: user,
        key: 'id'
      }
    },
    capacity: {
      type: DataTypes.TEXT,
    },
    modified: {
      type: DataTypes.DATE
    },
  },
  {
    tableName: "package_member",
  }
)}

// User.belongsToMany(Package, { through: PackageMember })
// Package.belongsToMany(User, { through: PackageMember })

// module.exports = PackageMember
