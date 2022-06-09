let targetDiv1 = document.querySelector(".main-page");
let targetDiv2 = document.querySelector(".thankyou-page");

    
function submit() {
    targetDiv1.style.display="none";
    targetDiv2.style.display = "block";
}

let backMainPage = document.querySelector(".thankyou-image");

function back() {
    targetDiv1.style.display="block";
    targetDiv2.style.display = "none";
}

let replaceMe = document.querySelector(".replace")
let rating1 = document.querySelector(".n1");
let rating2 = document.querySelector(".n2");
let rating3 = document.querySelector(".n3");
let rating4 = document.querySelector(".n4");
let rating5 = document.querySelector(".n5");

rating1 = 1;
rating2 = 2;
rating3 = 3; 
rating4 = 4;
rating5 = 5;

function select1() {
    replaceMe.textContent = rating1;
    
}

function select2() {
    replaceMe.textContent = rating2;
    
}

function select3() {
    replaceMe.textContent = rating3;
    
}

function select4() {
    replaceMe.textContent = rating4;
    
}

function select5() {
    replaceMe.textContent = rating5;
    
}

