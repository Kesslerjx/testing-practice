import { capitalize } from "../modules/capitalize.js";

test('Capitalizes the first letter in the word', () => {
    expect(capitalize('test')).toBe('Test');
});