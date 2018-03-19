"use strict";

const { execSync } = require("child_process");
const argv = require("argv");
const colors = require("colors/safe");

const exec = (cmd, title) => {
    console.log(colors.green(title ? title : `Running: "${cmd}"`));
    console.log(colors.green("-----------------------------------------------------------"));
    const stdout = execSync(cmd).toString();
    console.log(stdout);
    console.log(colors.green("-----------------------------------------------------------"));
    return stdout;
}

argv.option({
    name: 'example_number',
    short: 'e',
    type: 'number',
    description: 'Number of example to run',
    example: "'node ./runExample.js --example_number=1' or 'node ./runExample.js -e 1'"
});

const { options: { example_number } } = argv.run();

console.log(colors.red.bgYellow("Example " + example_number));

const dir = __dirname + "/example_" + ("00" + example_number).substr(-2,2);
const pathTs = dir + "/" + "example.ts";
const pathJs = dir + "/" + "example.js";

exec(`npm run tsc -- ${pathTs}`, "Compiling");
// exec(`cat ${pathJs}`, "Compiled file content");
// exec(`node ${pathJs}`, "Compiled file execution");
