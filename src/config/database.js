module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  port: 5433,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
