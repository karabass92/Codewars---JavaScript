/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
    
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

    eight(dividedBy(three()));
*/

const constant = a => (f = x => x) => f(a);

const zero = constant (0);
const one = constant (1);
const two = constant (2);
const three = constant (3);
const four = constant (4);
const five = constant (5);
const six = constant (6);
const seven = constant (7);
const eight = constant (8);
const nine = constant (9);

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => (a - (a % b)) / b;
