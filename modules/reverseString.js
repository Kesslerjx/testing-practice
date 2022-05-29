function reverseString(word) {
    console.log(word);
    let newWord = '';
    
    for(let x=word.length-1;x>=0; x--){
        newWord = newWord.concat(word[x]);
    }

    return newWord;
}

export {reverseString};