const { Sequelize } = require("sequelize");

console.log("Sequelize init")

const sequelize = new Sequelize("postgres://postgres:pushpa@localhost:5433/facade", {
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });


module.exports = sequelize;

