let students = [
    "Adams, Milante",
    "Beaner, Mark",
    "Bussure, Donna",
    "Case, John",
    "Chartier, Casey",
    "Chowdhury, Wardeh",
    // "Debas, Meron",
    "Fletcher, Billy",
    "Haggerty, Brenden",
    "Hall, Bradley",
    "Hill-Arnold, William",
    "Holman, Quinten",
    "Houghten, Keegan",
    "Hoye, Derek",
    "Huddleston, Cali",
    "Hussain, Sabir",
    "Kendall, Shannon",
    "Mccool, Barbara",
    "Mcmillan, Edward",
    "Methner, Isaac",
    // "Mitchell, Madeleine",
    "Moody, Justin",
    "Mucene, Jase",
    "Nobles, Jalean",
    // "Pargas Paredes, David",
    // "Roby, Travond",
    "Romero, Esmeralda",
    "Schulte, Doug",
    "Strozier, Rashida",
    "Thon, Justin",
    "Usai, Singharaj"
]

let resultElement = document.getElementById("result");

function randomStudent() {
    randex = Math.floor(Math.random() * students.length);
    resultElement.innerText = students[randex];
}