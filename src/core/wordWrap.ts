export const wrap = (text: string, column: number) => {
    if (column < 0) {
        throw new Error(`Column can't be negative and it is ${column}`);
    }
    return text;
}
