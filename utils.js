import todo from "./list.js"

export function resolveTodoId(input, deleted = false) {
    if (Number.isFinite(Number(input))) {
        return Number(input);
    }
    return deleted ? todo.deletedFind(input) : todo.find(input);
}

export function parseCommand(input) {
    const result = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === '"') {
            inQuotes = !inQuotes;
            continue;
        }
        if (char === " " && !inQuotes) {
            if (current !== "") {
                result.push(current);
                current = "";
            }
        } else {
            current += char;
        }
    }
    if (current !== "") {
        result.push(current);
    }
    return result;
}
