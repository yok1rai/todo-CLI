import todo from "./list.js"

export function resolveTodoId(input) {
    if (Number.isFinite(Number(input))) {
        return Number(input);
    }
    return todo.find(input);
}

