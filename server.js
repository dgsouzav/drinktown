const app = require('./bin/index.js');
const keys = require('./bin/keys.js');
const connection = require('./src/middleware/connection.js');

app.listen(keys.server.port, () => {
    connection.connect();
    console.log('Funcionando');
});