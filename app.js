#!/usr/bin/env node

import "./overload.js";
import { customGrey, customGreen, customRed, customWhite } from "./overload.js"
import todo from "./list.js";
import { hideBin } from 'yargs/helpers';
import yargs from "yargs";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((res) => {
        rl.question(customGrey(prompt), (answer) => {
            res(answer);
        })
    })
}

async function main() {
    const debugMode = process.env.DEBUG === "1" ? true : false;
    try {
        await yargs(hideBin(process.argv))
            .command(
                'add [task] [flags]',
                "add a new todo",
                (yargs) => {
                    return yargs.option('i', {
                        alias: 'immutable',
                        type: 'boolean',
                        default: false,
                        description: 'mark todo as immutable'
                    });
                },
                async (argv) => {
                    let name;
                    if (!argv.task) {
                        name = (await input("add: ")).trim();
                    } else {
                        name = argv.task;
                    }

                    todo.add(name, argv.i);
                }
            )
            .command(
                'list',
                'show all todos',
                {},
                () => {
                    if (!debugMode) {
                        todo.list()
                    } else {
                        todo.debugList();
                    }
                }
            )
            .command(
                'done [id]',
                'mark todo as done',
                {},
                async (argv) => {
                    let name;
                    if (!argv.id) {
                        name = (await input("mark as done: ")).trim();
                        if (!name) {
                            console.error("no task given");
                            return;
                        }
                    } else {
                        name = argv.id;
                    }
                    let id;
                    if (Number.isFinite(Number(name))) {
                        id = Number(name);
                        if (id < 0) {
                            console.error("ID must be bigger than zero");
                            return;
                        }
                    } else {
                        id = todo.find(name);
                    }
                    todo.done(id);
                }
            )
            .command(
                'delete [id]',
                'delete a todo',
                {},
                async (argv) => {
                    let name;
                    if (!argv.id) {
                        name = (await input("remove: ")).trim();
                        if (!name) {
                            console.error("no task given");
                            return;
                        }
                    } else {
                        name = argv.id;
                    }
                    let id;
                    if (Number.isFinite(Number(name))) {
                        id = Number(name);
                        if (id < 0) {
                            console.error("ID must be bigger than zero");
                            return;
                        }
                    } else {
                        id = todo.find(name);
                    }
                    todo.delete(id);
                }
            )
            .command(
                'clear',
                'delete all todos',
                {},
                async () => {
                    const confirm = (await input("Are you sure? ")).trim().toLowerCase();
                    if (confirm !== 'y' && confirm !== 'yes') {
                        console.log("clear canceled");
                        return;
                    }
                    todo.clear()
                }
            )
            .demandCommand(1, 1, "You must provide a message")
            .strict()
            .help()
            .alias('h', 'help')
            .version()
            .alias('v', 'version')
            .parseAsync();

    } catch (e) {
        if (debugMode) {
            console.log("error [DETAILED]:");
            console.log(e);
        } else {
            console.log("error:", e.message);
        }
        process.exit(1);
    } finally {
        rl.close();
    }
}

main();
