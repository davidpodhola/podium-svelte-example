const exec = require('await-exec')

const run = async (cmd, cwd) => {
    const { stdout, stderr } = exec(cmd, {cwd});
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
}

const myArgs = process.argv.slice(2);

const doIt = async () => {
    const apps = [ 'base-app', 'snowpack-typescript', 'svelte-message-pod', 'svelte-receive-pod' ];
    for (const app of apps ) {
        await run(myArgs[0], app);
    }
}
doIt().then();


