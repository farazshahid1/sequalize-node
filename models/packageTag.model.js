const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const { package, tag } = sequelize.models
  console.log("tag package check: ", sequelize.models)
  const PackageTag = sequelize.define(
    "package_tag",
    {
      id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      state: {
        type: DataTypes.TEXT
      },
      package_id: {
        type: DataTypes.TEXT,
        references: {
          model: package,
          key: 'id'
        }
      },
      teg_id: {
        type: DataTypes.TEXT,
        references: {
          model: tag,
          key: 'id'
        }
      },
    },
    {
      tableName: "package_tag",
    }
  )

  // package.belongsToMany(tag, { through: PackageTag })
  // tag.belongsToMany(package, { through: PackageTag })

}
