const { Sequelize } = require("sequelize");
const PackageMemberAssociation = require('./models/packageMember.model')


const database = () => {

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
  
    const modelDefiners = [
      require('./models/user.model'),
      require('./models/package.model'),
      require('./models/vocabulary.model'),
      require('./models/tag.model'),
      require('./models/packageTag.model')
    ];
    
    // We define all models according to their files.
    for (const modelDefiner of modelDefiners) {
      modelDefiner(sequelize);
    }
    
    // We execute any extra setup after the models are defined, such as adding associations.
    PackageMemberAssociation(sequelize);

    (async () => {
      try {
        await sequelize.sync(
          { force: false } //Reset db every time
        );
      } catch (error) {
        console.error(error)
      }
    })();
}


module.exports = database;
