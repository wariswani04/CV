function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your work-experience")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter your Academic-qualifications-here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


// generate cv
// name
function generateCV(){
 let nameField = document.getElementById("nameField").value;
 let nameT1 = document.getElementById("nameT1");
 nameT1.innerHTML = nameField;  


document.getElementById('nameT2').innerHTML = nameField;
 

// contact
document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

// address
document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

// linkedin
document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;

// github
document.getElementById('githubT').innerHTML = document.getElementById("githubField").value;
// insta
document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;

// objective
document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

// work experience

let wes = document.getElementsByClassName('weField')

let str = "";

for (let e of wes) {
    str = str + `<li>  ${e.value} </li>`;

}
    document.getElementById("weT").innerHTML = str;

// academic Qualification

let aqs = document.getElementsByClassName("eqField");

let str1 ="";

for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`; 
}
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("CV-form").style.display = "none";
    document.getElementById("CV-template").style.display = "block";
}

// print cv
function printCV() {
    window.print();
}
