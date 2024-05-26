const { read } = require('node:fs');
const readline = require('node:readline');

// main menu and main functionality will be written here!

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What song do you want to search for? ", songName => {
    console.log(`We are looking for ${songName}`)
    // API search and output here!!
    rl.close()
})