# TODO CLI

A simple and fast command-line todo application built with Node.js.

## Features

* Add, list, complete, and delete todos
* Persistent storage using a local JSON file
* Lightweight and easy to use
* Shell autocomplete support (Fish, Zsh, Bash)

## Installation

### Option 1: Local install

```bash
git clone https://github.com/yok1rai/todo-CLI
cd todo-CLI
npm install
```

### Option 2: Global usage (recommended)

```bash
npm link
```

Then use it anywhere:

```bash
todocli help
```

## Usage

If running locally:

```bash
node app.js <command> [args]
```

If installed globally:

```bash
todocli <command> [args]
```

## Commands

| Command | Description              | Arguments       |
| ------- | ------------------------ | --------------- |
| add     | Add a new todo           | Task text       |
| list    | Show all todos           | None            |
| done    | Mark a todo as completed | ID or task name |
| delete  | Delete a todo            | ID or task name |
| clear   | Delete all todos         | None            |
| help    | Show help menu           | None            |

## Examples

```bash
todocli add "wake up at 7AM"
todocli add "build a CLI tool"
todocli list

todocli done 1
todocli delete 2

todocli clear
```

### Output example

```bash
Your Todos:
wake up at 7AM [1] [not finished]
build a CLI tool [2] [done]
```

## Environment Variables

| Variable | Values            | Description                   |
| -------- | ----------------- | ----------------------------- |
| DEBUG    | 1 / anything else | Enables detailed error output |

Example:

```bash
DEBUG=1 todocli done "invalid task"
```

## Shell Completions

This project supports autocomplete for:

* Fish
* Zsh
* Bash

To install completions automatically:

```bash
node install-completions.js
```

Or it may run automatically after `npm install`.

## Project Structure

```text
.
├── app.js                # CLI entry point
├── list.js               # Todo logic
├── install-completions.js
├── completions/          # Shell completion scripts
│   ├── todocli.bash
│   ├── todocli.fish
│   └── todocli.zsh
├── data.json             # Local storage (auto-generated)
├── package.json
├── license               # license file (MIT)
└── README.md
```

## License

MIT License - Feel free to use this project however you like!
