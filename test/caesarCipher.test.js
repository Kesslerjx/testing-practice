import { caesarCipher } from "../modules/caesarCipher.js";

test('Test basic cipher', () =>{
    expect(caesarCipher('hi')).toBe('ij');
});

test('Test cipher with a capital letter', () =>{
    expect(caesarCipher('hI')).toBe('ij');
});

test('Test cipher with non letter characters', () =>{
    expect(caesarCipher('hi.hello')).toBe('ij.ifmmp');
});

test('Test cipher with a z to see if it wraps', () =>{
    expect(caesarCipher('xyz')).toBe('yza');
});

test('Test cipher with a mix of different characters', () =>{
    expect(caesarCipher('This is Alpha Zulu 3. Enemies incoming from the east & west side. Stay vigilant.'))
    .toBe('uijt jt bmqib avmv 3. fofnjft jodpnjoh gspn uif fbtu & xftu tjef. tubz wjhjmbou.');
});