/* 
Add points to scorer
@params {string} the property "name" of html, which corresponds to ID el we need to update
@param {string} the propery "value" of current selected el, which is the points increment
*/
function addPoint(name, value) {

    // grab needed data
    let scorer = document.getElementById(name); 
    let score = Number(scorer.textContent);
    
    // update UI
    score += Number(value);
    scorer.textContent = score;

    // hightlight winner
    whoIsWinning();
}

/* 
reset game
*/
function newGame() {

    // grab needed data
    let home = document.getElementById("home-score");
    let guest = document.getElementById("guest-score");

    // reset game points
    home.textContent = 0;
    guest.textContent = 0;

    // hightlight winner
    whoIsWinning();
}

/* 
add style to highlight the current winner
*/
function whoIsWinning() {
    // grab needed data
    let home = document.getElementById("home-score");
    let guest = document.getElementById("guest-score");
    let homeScore = Number(home.textContent);
    let guestScore = Number(guest.textContent);
    
    
    if (homeScore > guestScore) {
        home.style.backgroundColor = "#34D399";
        guest.style.backgroundColor = "#080001";

    } else if (guestScore > homeScore) {
        guest.style.backgroundColor = "#34D399";
        home.style.backgroundColor = "#080001";

    } else {
        guest.style.backgroundColor = "#080001";
        home.style.backgroundColor = "#080001";
    }

}   