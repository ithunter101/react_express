const { CONST } = require("./src/constants/strings");

module.exports = {
  type: "mysql",
  host: CONST.MYSQL_HOST_IP,
  port: '3306',
  username: "root",
  password: "",
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
