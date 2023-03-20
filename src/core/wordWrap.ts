export const wrap = (text: string, column: number) => {
    checkIfNegativeColumn(column);
    return text.replace(text[column], `\n${text[column]}`);
}

const checkIfNegativeColumn = (column: number) => {
    if (column < 0) {
        throw new Error(`Column can't be negative and it is ${column}`);
    }
}
