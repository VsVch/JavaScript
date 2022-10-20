function wordUppercase(text) {
   
    let formattedWords = [];
    let words = text.split(/\W+/g);

    for (const word of words) {
        
        if (word !== '') {
            formattedWords.push(word.toUpperCase());
        }
    }
    console.log( formattedWords.join(', '));
}

wordUppercase('Hi, how are you?');

function upper(input){
    let wordArray = [];
    let letters = input.split(/\W+/g);
    for (const letter of letters){
        if(letter !== ""){
            wordArray.push(letter.toUpperCase());
        }
    }
    console.log(wordArray.join(", "));

}
upper(`hello word!`);