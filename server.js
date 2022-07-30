const express = require('express')
const cors = require('cors')
const db = require('./app/models');

//Inisiasi port yang akan dipakai
const PORT = process.env.PORT || 3000

//Deklarasi express.js
const app = express()

app.use(cors());

//Migrasi tabel yang ada dalam setiap model
db.sequelize.sync({ force: false });

//Inisasi routing pada halaman awal
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to OTSS API Service. :)'
    })
})

require('./app/routes/weapon.routes')(app);
require('./app/routes/role.routes')(app);
// require('./app/routes/hero.routes')(app);
require('./app/routes/skill.routes')(app);
require('./app/routes/map.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})