export const wrap = (text: string, column: number) => {
    checkIfNegativeColumn(column);
    let textWithLineBreaks = "";
    for (let i = 0; i < text.length; i += column) {
        textWithLineBreaks += `${text.substring(i, i+column)}\n`;
    }
    return textWithLineBreaks.slice(0, -1);
}

const checkIfNegativeColumn = (column: number) => {
    if (column < 0) {
        throw new Error(`Column can't be negative and it is ${column}`);
    }
}
