const environment = require('./environment');
const { spawn } = require('child_process');
spawn(/^win/.test(process.platform) ? 'reaction.cmd' : 'reaction', {
    env: environment,
    stdio: 'inherit',
    detached: false
});