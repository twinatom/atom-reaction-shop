const { exec } = require('child_process');
const { join } = require('path');
const laundCmd = /^win/.test(process.platform) ? 'reaction.cmd' : 'reaction';
const cwd = process.cwd();

const pluginRepositories = [
    'git@github.com:twinatom/atom-landing-page.git'
];
pluginRepositories.forEach(repository => {
    exec(`git clone ${repository}`,
        {

            stdio: 'inherit',
            cwd: join(cwd, 'imports', 'plugins', 'custom'),
            detached: false
        })
});
