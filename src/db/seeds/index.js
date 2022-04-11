// IMPORTS
const seedWords = require("./words");
const sequelize = require("../../config/connection");

// seed all models
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database synced -----\n");

  await seedWords();
  console.log("\n----- Words seeded -----\n");

  process.exit(0);
};

seedAll();
