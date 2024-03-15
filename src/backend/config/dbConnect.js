const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Sequelize instance for connecting to a PostgreSQL database on RDS.
 * It utilizes environment variables for configuration.
 *
 * @type {Sequelize} - Sequelize instance
 */
const sequelize = new Sequelize({
  username: process.env.RDS_USERNAME, // Username for RDS
  password: process.env.RDS_PASSWORD, // Password for RDS
  host: process.env.RDS_HOSTNAME, // Hostname for RDS
  port: process.env.RDS_PORT, // Port for RDS
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }, // Enable SSL for RDS
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
