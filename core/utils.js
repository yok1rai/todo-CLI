export function resolveTodoId(input, deleted = false, todoInstance) {
    if (Number.isFinite(Number(input))) {
        return Number(input);
    }
    return deleted
        ? todoInstance.deletedFind(input)
        : todoInstance.find(input);
}

export function parseCommand(input) {
    const result = [];
    let current = "";
    let inQuotes = false;
    let escapeNext = false;

    for (const char of input) {

        if (escapeNext) {
            switch (char) {
                case '"':
                    current += '"';
                    break;
                case "\\":
                    current += "\\";
                    break;
                default:
                    current += char;
            }
            escapeNext = false;
            continue;
        }

        if (char === "\\") {
            escapeNext = true;
            continue;
        }

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
