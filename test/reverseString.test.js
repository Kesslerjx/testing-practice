import { reverseString } from "../modules/reverseString.js";

test('Reverses the characters in a word', () => {
    expect(reverseString('test')).toBe('tset');
});