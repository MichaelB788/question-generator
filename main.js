const btn = document.getElementById("btn");
const questionNode = document.getElementById("questions");
const languageNode = document.getElementById("language");

let questions = [
    "q1",
    "q2",
    "q3",
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

function newQuestion(arr){
    let rand = Math.floor((Math.random())*questions.length);

    return arr[rand];
}

function generate(node, arr){
    const newContent = document.createTextNode(newQuestion(arr));

    node.removeChild(node.firstChild);
    node.appendChild(newContent);
}