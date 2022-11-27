let targetDiv1 = document.querySelector(".main-page");
let targetDiv2 = document.querySelector(".thankyou-page");
let submitButton = document.querySelector(".submit");

const btns = document.querySelectorAll(".number-selector");
let ratingValue = document.querySelector(".replace")

btns.forEach(btn=>btn.addEventListener("click", function(e) {
    ratingValue.textContent = this.textContent;
    submitButton.disabled = false;

    btns.forEach(x=> x.style.background = "var(--DarkBlue)");
    btns.forEach(x=> x.style.color = "var(--LightGrey)")

    e.target.style.background = "var(--primary)";
    e.target.style.color = "white";
}))

submitButton.addEventListener("click", function(e) {
    if (submitButton.disabled === false) {

        targetDiv1.animate([
            // keyframes
            { transform: "scale(1)"},
            { transform: 'scale(0)'}          
            
          ], {
            // timing options
            duration:400
          });
        setTimeout(() => {targetDiv1.style.display = "none"},400);
        
        setTimeout(() => {targetDiv2.style.display = "block"},500);
        setTimeout(() => {targetDiv2.animate([
          // keyframes
          { transform: "scale(.2)"},
          { transform: 'scale(1)'}
        ], {
          // timing options
          duration: 400
        });},500);
        
          
    }
})

function back() {
    location.reload();
}
