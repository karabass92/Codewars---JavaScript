/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
    apples, pears # and bananas
    grapes
    bananas !apples

The output expected would be:
    apples, pears
    grapes
    bananas

The code would be called like so:
    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    // result should == "apples, pears\ngrapes\nbananas".
*/

function solution(input, markers) {
    let startPos = 0;
    let endPos = 0;
    let tempArr = input.split('');
    for (let marker of markers) {
        startPos = tempArr.indexOf(marker) - 1;
        endPos = tempArr.indexOf('\n', startPos );
        if (endPos == -1){
            endPos = tempArr.length;
        }
        for (let i = startPos; i < endPos; i++){
            delete tempArr[i];
        }
    }
    return tempArr.join('');
};