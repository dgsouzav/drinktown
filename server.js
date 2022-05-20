const app = require('./bin/index.js');
const keys = require('./bin/keys.js');

app.listen(keys.server.port, () => {
    console.log('Funcionando');
});