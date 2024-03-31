const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost/social-network';

connect(connectionString, 
).then(() =>
    console.log('Connected to the database!'))
    .catch(err =>
        console.error(err));

module.exports = connection;

