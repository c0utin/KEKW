const Sequelize = require('sequelize');

/**
 * Sequelize instance for connecting to a PostgreSQL database on Amazon RDS.
 * It utilizes hardcoded configuration.
 *
 * @type {Sequelize} - Sequelize instance
 */
const sequelize = new Sequelize('inteli', 'postgres', '12345678', {
  host: 'database-4.c18cukuqyzii.us-east-1.rds.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false // Enable SSL for RDS
    }
  },
});

/**
 * Function to sync the Sequelize instance with the database.
 * This ensures that the defined models are created in the database.
 * If force is set to true, it will drop all tables and recreate them.
 *
 * @param {boolean} force - Whether to force sync and reset the database.
 * @returns {Promise<void>} - Promise indicating the sync process completion.
 */
const syncDatabase = async (force = false) => {
  await sequelize.sync({ force });
};

// Call the syncDatabase function with force true to reset the database
syncDatabase(true);

module.exports = sequelize;
