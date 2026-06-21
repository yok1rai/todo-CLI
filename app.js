#!/usr/bin/env node

import todo from "./list.js";
import { hideBin } from 'yargs/helpers';
import yargs from "yargs";

async function main() {
    const debugMode = process.env.DEBUG === "1" ? true : false;

    try {
        await yargs(hideBin(process.argv))
            .command(
                'add <task>',
                "add a new todo",
                {},
                (argv) => {
                    todo.add(argv.task);
                }
            )
            .command(
                'list',
                'show all todos',
                {},
                () => {
                    todo.list()
                }
            )
            .command(
                'done <id>',
                'mark todo as done',
                {},
                (argv) => {
                    const name = argv.id;
                    let id;
                    if (Number.isFinite(Number(name))) {
                        id = Number(name);
                        if (id < 0) {
                            throw new Error("ID must be bigger than zero");
                        }
                    } else {
                        id = todo.find(name);
                    }
                    todo.done(id);
                }
            )
            .command(
                'delete <id>',
                'delete a todo',
                {},
                (argv) => {
                    const name = argv.id;
                    let id;
                    if (Number.isFinite(Number(name))) {
                        id = Number(name);
                        if (id < 0) {
                            throw new Error("ID must be bigger than zero");
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
                () => {
                    todo.clear()
                }
            )
            .completion('completion', 'Generate completion script', () => {
                return ['add', 'list', 'done', 'delete', 'clear', 'help']
            })
            .demandCommand(1, "You must specify a command")
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
    }
}

main();
