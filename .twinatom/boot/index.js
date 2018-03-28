const environment = require('../environment');
const { spawn } = require('child_process');;
const laundCmd = /^win/.test(process.platform) ? 'reaction.cmd' : 'reaction';
const cwd = process.cwd();
spawn(laundCmd,
    {
        env: {
            //prevent to load default data
            'SKIP_FIXTURES': true,
            ...environment
        },
        stdio: 'inherit',
        cwd: cwd,
        detached: false
    });