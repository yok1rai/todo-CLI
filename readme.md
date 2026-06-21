# TODO CLI

A simple command-line todo application built with Node.js

## Features

- Add, list, mark done, and delete todos
- Persistent storage with JSON
- Simple to use

## Installation

```bash
git clone "https://github.com/yok1rai/todo-CLI"
cd todo-CLI
npm install
```

## Usage

```bash
node app.js [args]
```

### Available Arguments

|Argument|Explained|Extra Argument (if exists)|
|:-------|:--------|:-------------------------|
|add     |Add a new task|Task name|
|list    |List all tasks| --- |
|done    |Mark a task as completed|Task name or task ID|
|delete  |Delete a task|Task name or task ID|
|clear   |Delete all tasks| --- |
|help    |Show help menu| --- |

### Example

```bash
% node app.js help
    TODO CLI

    USAGE:
        node app.js <command> [args]

    ENVIRONMENT VARIABLES
        DEBUG              Enable DEBUG mode
           1                    DEBUG mode enabled
           anything else        DEBUG mode disabled
    COMMAND:
        add <task>          Add a new todo
        list                Show all todos
        done <id|name>      Mark todos as done
        delete <id|name>    Delete a todo
        clear               Delete all todos
        help                show this help menu

% node app.js add "wake up at 7AM"
Added: wake up at 7AM

% node app.js add "Make a program about how wonderful cookies are"
Added: Make a program about how wonderful cookies are

% node app.js list
Your Todos:
wake up at 7AM  [1]  [not finished]
Make a program about how wonderful cookies are  [2]  [not finished]

% node app.js delete 1
"wake up at 7AM" is deleted

% node app.js list
Your Todos:
Make a program about how wonderful cookies are  [2]  [not finished]

% node app.js add "go to the school"
Added: go to the school

% node app.js done "go to the school"
go to the school marked as done!

% node app.js list
Your Todos:
Make a program about how wonderful cookies are  [2]  [not finished]
go to the school  [3]  [done]

% node app.js clear
all todos cleared

% node app.js list
error: no todos yet!
```

### Environment Variables

|Environment Variable|Value|Description|
|:-------------------|:----|:----------|
|DEBUG|1 is enabled, anything else is disabled|Enable debug mode (shows detailed errors)|


```bash
% node app.js done "this task does not exist"
error: todo not found

% DEBUG=1 node app.js done "this task does not exist"
detailed error:
 Error: todo not found
    at Todolist.find (file:///home/yok1rai/Desktop/todoCLI/list.js:52:19)
    at main (file:///home/yok1rai/Desktop/todoCLI/app.js:58:31)
    at file:///home/yok1rai/Desktop/todoCLI/app.js:111:1
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:666:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
```

## Project Structure

```tree
.
├── app.js -> entry point
├── list.js -> TodoList class (main logic)
├── data.json -> Data storage (auto generated)
├── README.md -> this file
└── license -> license file
```

## License

this program is licensed under [MIT](https://mit-license.org/) license
