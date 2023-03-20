import { wrap } from "../core/wordWrap";

describe('Word Wrap test', () => {
    it('should return the same string if it is empty', () => {
        expect(wrap("", 1)).toBe("");
    })
    
    it('should return error message if column is negative', () => {
        expect(() => wrap("hello", -2)).toThrow("Column can't be negative and it is -2");
    });

    it('should return the string with column number as line breaks', () => {
        expect(wrap("hello", 2)).toBe("he\nllo");
    })
})
