import chalk from "chalk";

export const customRed = chalk.rgb(255, 0, 0);
export const customGreen = chalk.rgb(0, 255, 0);
export const customGrey = chalk.rgb(50, 50, 50);
export const customWhite = chalk.rgb(255, 255, 255);
export const customYellow = chalk.rgb(255, 255, 0); 

const originalError = console.error;
console.error = function (...args) {
    const message = args.map(arg => String(arg)).join(' ');
    originalError.call(console, customRed(message));
};
