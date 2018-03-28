const environment = require('../environment');
const { spawn } = require('child_process');

const cwd = process.cwd();
let activeEnv = 'production';

process.argv.forEach((val, index) => {
    if (index === 'env') {
        if (val === 'development') {
            activeEnv = 'development';
        }
    }
});

let laundCmd = (/^win/.test(process.platform) ? 'reaction.cmd' : 'reaction');

if (activeEnv === 'development') {
    laundCmd += ' run';
}

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