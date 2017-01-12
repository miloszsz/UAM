const minimist = require('minimist');
const lib = require('./lib');
const args = minimist(process.argv.slice(2));

if (args.greeting === false) {
    console.log('shh!');
} else {
    const toGreet = lib.extractGreeting(args);

    console.log('Hello ' + toGreet.join(', ') + '!');
}