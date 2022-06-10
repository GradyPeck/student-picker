let students = [
    "Adams, Milante",
    "Beaner, Mark",
    "Bussure, Donna",
    "Case, John",
    "Chartier, Casey",
    "Chowdhury, Wardeh",
    "Debas, Meron",
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
    "Mitchell, Madeleine",
    "Moody, Justin",
    "Mucene, Jase",
    "Nobles, Jalean",
    "Pargas Paredes, David",
    "Roby, Travond",
    "Romero, Esmeralda",
    "Schulte, Doug",
    "Strozier, Rashida",
    "Thon, Justin",
    "Usai, Singharaj"
]

let resultElement = document.getElementById("result");
let studentsElement = document.getElementById("studentList");

for (let i = 0; i < students.length; i++) {
    let newEl = document.createElement("button");
    newEl.innerText = students[i];
    newEl.setAttribute("onclick", "toggleAbsent(this)");
    studentsElement.appendChild(newEl);
}

function toggleAbsent(nod) {
    if (students.includes(nod.innerText)) {
        students.splice(students.indexOf(nod.innerText), 1);
        nod.classList.add("absent");
    } else {
        students.push(nod.innerText);
        nod.classList.remove("absent");
    }
    
}

function randomStudent() {
    randex = Math.floor(Math.random() * students.length);
    resultElement.innerText = students[randex];
}