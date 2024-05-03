const btn = document.getElementById("btn");
const questionNode = document.getElementById("questions");
const languageNode = document.getElementById("language");

let questions = [
    `Infinite Monkey Theorem: The theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type a given text. Suppose we replace the monkey with a function. How long would it take for a the function to generate just one sentence? Come up with a sentence for the compiler to figure out! - GeeksForGeeks`,
    `Given a natural number n, find the sum of the sum-series of the first N natural number (Sum-Series: is sum of first N natural numbers, i.e; sum-series of 5 is 15 ( 1 + 2 + 3 + 4 + 5 )) - GeeksForGeeks`,
    `Given a number N, check whether the given number is binary or not and if its value should be greater than 1. print true if N is the binary representation else print false (A binary number is a number expressed in the base -2 numeral system or binary numeral system, a method of mathematical expression which uses only two symbols: typically "0" (zero) and "1" (one).) - GeeksForGeeks`,
    `Mastermind: A low-level implementation of the classic game “Mastermind”. We need to write a program that generates a four-digit random code and the user needs to guess the code in 10 tries or less. If any digit out of the guessed four-digit code is wrong, the computer should print out “B”. If the digit is correct but at the wrong place, the computer should print “Y”. If both the digit and position is correct, the computer should print “R”. - GeeksForGeeks`,
    `Direction Catastrophe: A man was given directions to go from point A to point B. The directions were: “SOUTH”, “NORTH”, “WEST”, “EAST”. Clearly “NORTH” and “SOUTH” are opposite, “WEST” and “EAST” too. Going to one direction and coming back in the opposite direction is a waste of time and energy. So, we need to help the man by writing a program that will eliminate the useless steps and will contain only the necessary directions. - GeeksForGeeks`,
];

let languages = [
    "PHP",
    "Haskell",
    "Java",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "C#",
    "Kotlin",
    "Rust",
    "TypeScript",
    "Assembly",
    "GO",
];

btn.onclick = () => {
    generate(questionNode, questions);
    generate(languageNode, languages);
}

// btn.addEventListener("", () =>)

function newQuestion(arr){
    let rand = Math.floor((Math.random())*arr.length);

    return arr[rand];
}

function generate(node, arr){
    const newContent = document.createTextNode(newQuestion(arr));

    node.removeChild(node.firstChild);
    node.appendChild(newContent);
}