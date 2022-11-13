//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

let testString = 'Hey fellow warriors'

function spinWords(string){
    //create temporary array of words of string
    let tempString = string.split(' ');

    // by iterating every word in aray we check its length
    for (i in tempString){
    
    // if length more than 4, we split it in chars and reverse, then join
        if (tempString[i].length > 4){
            tempString[i] = tempString[i].split('').reverse().join('');
        }
    }
    return tempString.join(" ");
}

console.log(spinWords(testString));