//Memamnggil data-data kongigurasi database
const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorAliases: false,
    timezone: dbConfig.timezone
})


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Memanggil model-model yang sudah dibuat
db.hero = require('./hero.model.js')(sequelize, Sequelize);
db.map = require('./map.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.skill = require('./skill.model')(sequelize, Sequelize);
db.weapon = require('./weapon.model')(sequelize, Sequelize);

db.hero.hasMany(db.skill);
db.skill.belongsTo(db.hero);


module.exports = db;