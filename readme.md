# TODO CLI

A fast, lightweight command-line todo application built with Node.js.

It supports persistent storage, timestamps, and a full CLI interface with interactive fallback input.

---

## ✨ Features

* Add, list, complete, and delete todos
* Persistent storage using OS-specific config directories
* Timestamp tracking (`createdAt`, `completedAt`)
* Human-readable time display (seconds / minutes ago)
* Interactive CLI input when arguments are missing
* Name or ID-based todo selection
* Debug mode for detailed error output
* Shell completion support (Fish, Zsh, Bash)

---

## 📦 Installation

### Option 1: Local install

```bash
git clone https://github.com/yok1rai/todo-CLI
cd todo-CLI
npm install
```

### Option 2: Global install (recommended)

```bash
npm link
```

Then use anywhere:

```bash
todocli add "example task"
todocli list
```

---

## 🚀 Usage

### If running locally:

```bash
node app.js <command> [args]
```

### If installed globally:

```bash
todocli <command> [args]
```

---

## 📌 Commands

| Command | Description            | Arguments       |
| ------- | ---------------------- | --------------- |
| add     | Add a new todo         | Task text       |
| list    | Show all todos         | None            |
| done    | Mark todo as completed | ID or task name |
| delete  | Delete a todo          | ID or task name |
| clear   | Delete all todos       | None            |
| help    | Show help menu         | None            |

---

## 💡 Examples

```bash
todocli add "wake up early"
todocli add "build CLI project"
todocli list

todocli done 1
todocli delete 2

todocli clear
```

---

## ⏱️ Output example

```bash
Your Todos:
wake up early [1] [not finished] [created 2 minutes ago]
build CLI project [2] [done] [done 30 seconds ago]
```

---

## 💾 Storage system

Todos are automatically stored in OS-specific locations:

* **Windows:** `%APPDATA%/todocli/data.json`
* **macOS:** `~/Library/Application Support/todocli/data.json`
* **Linux:** `~/.config/todocli/data.json`

No manual setup required.

---

## 🧠 Data model

Each todo includes:

```json
{
  "id": 1,
  "task": "example",
  "completed": false,
  "deleted": false,
  "createdAt": "ISO timestamp",
  "completedAt": "ISO timestamp or null"
}
```

---

## 🧪 Debug mode

Enable detailed error output:

```bash
DEBUG=1 todocli done "invalid input"
```

---

## ⌨️ Interactive mode

If arguments are not provided, the CLI will prompt for input:

```bash
todocli add
add: _
```

---

## 🔧 Shell completions

Supported shells:

* Fish
* Zsh
* Bash

Generate completions:

```bash
node install-completions.js
```

---

## 📁 Project structure

```text
.
├── app.js                 # CLI entry point (yargs)
├── list.js                # Todo logic
├── genFile.js            # OS config + storage layer
├── install-completions.js
├── completions/          # shell completion scripts
├── package.json
├── README.md
└── license
```

---

## 📜 License

MIT License — feel free to use, modify, and build on it.
