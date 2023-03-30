const sequelize = require('../config/connection');
const { User, Tech } = require('../models');

const userData = require('./userData.json');
const techData = require('./techData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Tech of techData) {
    await Tech.create({
      ...Tech,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
