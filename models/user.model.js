const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../database");

module.exports = (sequelize) => { sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.TEXT,
    },
    apiKey: {
      type: DataTypes.TEXT,

    },
    created: {
      type: DataTypes.DATE
    },
    about: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    fullname: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT
    },
    reset_key: {
      type: DataTypes.TEXT
    },
    sysadmin: {
      type: DataTypes.BOOLEAN
    },
    activity_streams_email_notifications: {
      type: DataTypes.BOOLEAN
    },
    state: {
      type: DataTypes.TEXT
    },
    plugin_extras: {
      type: DataTypes.JSONB
    },
    image_url: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "user",
  }
)}



// module.exports = User
