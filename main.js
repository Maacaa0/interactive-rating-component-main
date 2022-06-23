let targetDiv1 = document.querySelector(".main-page");
let targetDiv2 = document.querySelector(".thankyou-page");
let submitButton = document.querySelector(".submit");
let elementClicked = false;


submitButton.addEventListener('click',function submit() {
    if (elementClicked == true) {
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "block";
}  else {
    alert("You need to select rating!")
}
});

// JUST MY FUNCTION TO GET TO MAIN PAGE WITHOUT NEEDING TO REFRESH THE PAGE

let backMainPage = document.querySelector(".thankyou-image");

function back() {
    targetDiv1.style.display="block";
    targetDiv2.style.display = "none";
    rating1.style.background = "var(--DarkBlue)";
    rating1.style.color = "var(--LightGrey)";
    rating2.style.background = "var(--DarkBlue)";
    rating2.style.color = "var(--LightGrey)";
    rating3.style.background = "var(--DarkBlue)";
    rating3.style.color = "var(--LightGrey)";
    rating4.style.background = "var(--DarkBlue)";
    rating4.style.color = "var(--LightGrey)";
    rating5.style.background = "var(--DarkBlue)";
    rating5.style.color = "var(--LightGrey)";
    elementClicked = false;
}

//-------------------------------------------------------------

let replaceMe = document.querySelector(".replace")
let rating1 = document.querySelector(".n1");
let rating2 = document.querySelector(".n2");
let rating3 = document.querySelector(".n3");
let rating4 = document.querySelector(".n4");
let rating5 = document.querySelector(".n5");




rating1.addEventListener('click', function() {
    replaceMe.textContent = rating1.textContent;
    elementClicked = true;
    rating1.style.background = "var(--primary)";
    rating1.style.color = "white";
    rating2.style.background = "var(--DarkBlue)";
    rating2.style.color = "var(--LightGrey)";
    rating3.style.background = "var(--DarkBlue)";
    rating3.style.color = "var(--LightGrey)";
    rating4.style.background = "var(--DarkBlue)";
    rating4.style.color = "var(--LightGrey)";
    rating5.style.background = "var(--DarkBlue)";
    rating5.style.color = "var(--LightGrey)";
});


rating2.addEventListener('click', function() {
    replaceMe.textContent = rating2.textContent;
    elementClicked = true;
    rating2.style.background = "var(--primary)";
    rating2.style.color = "white";
    rating1.style.background = "var(--DarkBlue)";
    rating1.style.color = "var(--LightGrey)";
    rating3.style.background = "var(--DarkBlue)";
    rating3.style.color = "var(--LightGrey)";
    rating4.style.background = "var(--DarkBlue)";
    rating4.style.color = "var(--LightGrey)";
    rating5.style.background = "var(--DarkBlue)";
    rating5.style.color = "var(--LightGrey)";
    
});

rating3.addEventListener('click', function() {
    replaceMe.textContent = rating3.textContent;
    elementClicked = true;
    rating3.style.background = "var(--primary)";
    rating3.style.color = "white";
    rating1.style.background = "var(--DarkBlue)";
    rating1.style.color = "var(--LightGrey)";
    rating2.style.background = "var(--DarkBlue)";
    rating2.style.color = "var(--LightGrey)";
    rating4.style.background = "var(--DarkBlue)";
    rating4.style.color = "var(--LightGrey)";
    rating5.style.background = "var(--DarkBlue)";
    rating5.style.color = "var(--LightGrey)";
    
});

rating4.addEventListener('click', function() {
    replaceMe.textContent = rating4.textContent;
    elementClicked = true;
    rating4.style.background = "var(--primary)";
    rating4.style.color = "white";
    rating1.style.background = "var(--DarkBlue)";
    rating1.style.color = "var(--LightGrey)";
    rating3.style.background = "var(--DarkBlue)";
    rating3.style.color = "var(--LightGrey)";
    rating2.style.background = "var(--DarkBlue)";
    rating2.style.color = "var(--LightGrey)";
    rating5.style.background = "var(--DarkBlue)";
    rating5.style.color = "var(--LightGrey)";
    
});

rating5.addEventListener('click', function() {
    replaceMe.textContent = rating5.textContent;
    elementClicked = true;
    rating5.style.background = "var(--primary)";
    rating5.style.color = "white";
    rating1.style.background = "var(--DarkBlue)";
    rating1.style.color = "var(--LightGrey)";
    rating3.style.background = "var(--DarkBlue)";
    rating3.style.color = "var(--LightGrey)";
    rating4.style.background = "var(--DarkBlue)";
    rating4.style.color = "var(--LightGrey)";
    rating2.style.background = "var(--DarkBlue)";
    rating2.style.color = "var(--LightGrey)";
    
});
