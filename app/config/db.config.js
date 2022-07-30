module.exports = {
    HOST: 'db',
    USER: 'postgres',
    PASSWORD: 'postgres',
    DB: 'testing',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: "+07:00",
}