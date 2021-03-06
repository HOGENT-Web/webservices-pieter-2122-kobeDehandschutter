module.exports = {
  env: 'NODE_ENV',

  database: {
    host: 'DATABASE_HOST',
    name: 'DATABASE_NAME',
    username: 'DATABASE_USERNAME',
    password: 'DATABASE_PASSWORD',
  },
  auth: {
    jwt: {
      secret: 'JWT_SECRET',
    },
  },
};
