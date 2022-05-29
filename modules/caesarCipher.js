const SHIFT = 1;

function caesarCipher(word) {
    //Convert each character to lowercase
    let lowerCase = allLowerCase(word);
    
    let cipher = '';

    //Loop through each letter in the word and get the shifted value
    for(let i=0; i<lowerCase.length; i++){
        cipher = cipher.concat(getShiftedLetter(lowerCase[i]));
    }

    return cipher;
}

function allLowerCase(word) {

    let newWord = "";
    for(let i=0; i<word.length; i++){
        newWord = newWord.concat(word[i].toLowerCase());
    }

    return newWord;
}

function getShiftedLetter(char) {
    //Checks if the character is a letter
    //If it is, shift it
    //If not, just return the char
    if(charIsLetter(char)) {
        //Get the ascii value of the letter
        let asciiValue = char.charCodeAt(0);

        //Loop through number of shifts
        //Use loop to always check if it's going pass Z
        for(let s=0; s < SHIFT; s ++) {
            //Add to value
            asciiValue++

            //If passs z, set to a
            if(asciiValue === 123) {
                asciiValue = 97;
            }
        }

        //Return letter based on asciiValue
        return String.fromCharCode(asciiValue);
    } else {
        return char;
    }

}

function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return /^[a-zA-Z]+$/.test(char);
  }

export {caesarCipher}