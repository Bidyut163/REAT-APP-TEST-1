const express = require('express');
// connect DB
const sequelize = require('./util/database');

const app = express();

// Models
const Appellant = require('./models/Appellant');
const Appeal = require('./models/Appeal');
const AppealState = require('./models/AppealState');
const Checklist = require('./models/Checklist');

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API IS RUNNING'));

// Define Routes
const userRoutes = require('./routes/officials/userRoutes');
const authRoutes = require('./routes/officials/authRoutes');
const appellantUserRoutes = require('./routes/appellants/userRoutes');
const appealRoutes = require('./routes/appellants/appealRoutes');
const receptionistRoutes = require('./routes/officials/receptionistRoutes');
const registrarRoutes = require('./routes/officials/registrarRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appellants', appellantUserRoutes);
app.use('/api/appellant', appealRoutes);
app.use('/api/receptionist', receptionistRoutes);
app.use('/api/registrar', registrarRoutes);

// Define PORT
const PORT = process.env.PORT || 5000;

// Model relations
Appeal.belongsTo(Appellant, { constraints: true, onDelete: 'CASCADE' });
Appellant.hasMany(Appeal);

AppealState.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(AppealState);

Checklist.belongsTo(Appeal, { constraints: true, onDelete: 'CASCADE' });
Appeal.hasOne(Checklist);

sequelize
    // .sync({ force: true })
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING');
        });
    })
    .catch((err) => {
        console.log(err);
    });
