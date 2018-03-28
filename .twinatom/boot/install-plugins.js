const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { join } = require('path');
const reactionCmd = /^win/.test(process.platform) ? 'reaction.cmd' : 'reaction';
const cwd = process.cwd();
const { Observable } = require('rxjs');

const pluginRepositories = [
    'git@github.com:twinatom/atom-landing-page.git'
];


const stream = Observable.from(pluginRepositories).
    mergeMap(repository => Observable.fromPromise(
        exec(`git clone ${repository}`,
            {

                stdio: 'inherit',
                cwd: join(cwd, 'imports', 'plugins', 'custom'),
                detached: false
            })
    )).last()
    .mergeMap(() => Observable.fromPromise(exec(`${reactionCmd} plugins load`)))
stream.subscribe(next => console.log(next), error => console.error(error));