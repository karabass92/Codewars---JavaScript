/*
Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743
*/

function listPosition(word){
    let count = 0;
    let first_char, unique_chars, possible_orders;

    const fact = function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    while (word.length){
        first_char = word[0];
        unique_chars = new Set(word);
        possible_orders = fact(word.length);
        
        for (char of unique_chars){
            possible_orders = possible_orders / fact(word.split(char).length - 1);
        }
            
        for (char of unique_chars){
            if (char < first_char){
                count += Math.trunc(possible_orders/word.length * (word.split(char).length - 1));
            }   
        }
            
        word = word.slice(1);
    }

    return Math.trunc(count) + 1;
}