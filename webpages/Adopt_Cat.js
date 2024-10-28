let number = 1; // Initialize the number variable
const c1 = document.getElementById('card1');
const c2 = document.getElementById('card2');
const c3 = document.getElementById('card3');
const c4 = document.getElementById('card4');
const dn1 = document.getElementById('catname1');
const dn2 = document.getElementById('catname2');
const dn3 = document.getElementById('catname3');
const dn4 = document.getElementById('catname4');
const d1 = document.getElementById('catdesc1');
const d2 = document.getElementById('catdesc2');
const d3 = document.getElementById('catdesc3');
const d4 = document.getElementById('catdesc4');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

function PlusOne() {
    number += 1;
    updateUI();
}

function MinusOne() {
    number -= 1;
    updateUI();
}

function openLink1() {
    if (number === 1) {
    window.location.href = 'Cats/Cat1.html';}

    else if (number === 2) {
    window.location.href = 'Cats/Cat5.html';}
}

function openLink2() {
    if (number === 1) {
    window.location.href = 'Cats/Cat2.html';}

    else if (number === 2) {
    window.location.href = 'Cats/Cat6.html';}
}

function openLink3() {
    if (number === 1) {
    window.location.href = 'Cats/Cat3.html';
   
    }else if (number === 2) {
    window.location.href = 'Cats/Cat7.html';}
}

function openLink4() {
    if (number === 1) {
    window.location.href = 'Cats/Cat4.html';}

    else if (number === 2) {
    window.location.href = 'Cats/Cat8.html';}
}

function updateUI() {
    if (number === 1) {
        leftButton.disabled = true;
        rightButton.disabled = false;
        var c1 = document.getElementById('card1');
        c1.src = '../images/cat1.png';
        var c2 = document.getElementById('card2');
        c2.src = '../images/cat2.png';
        var c3 = document.getElementById('card3');
        c3.src = '../images/cat3.png';
        var c4 = document.getElementById('card4');
        c4.src = '../images/cat4.png';
        console.log("Left and Right buttons disabled.");
        d1.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d2.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d3.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d4.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        dn1.textContent = "Puff";
        dn2.textContent = "Griffith";
        dn3.textContent = "Namie";
        dn4.textContent = "Cotton";

    } else if (number === 2) {
        rightButton.disabled = true;
        leftButton.disabled = false;
        var c1 = document.getElementById('card1');
        c1.src = '../images/cat5.png';
        var c2 = document.getElementById('card2');
        c2.src = '../images/cat6.png';
        var c3 = document.getElementById('card3');
        c3.src = '../images/cat7.png';
        var c4 = document.getElementById('card4');
        c4.src = '../images/cat8.png';
        console.log("Left and Right buttons disabled.");
        d1.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d2.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d3.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d4.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        dn1.textContent = "Sam";
        dn2.textContent = "Rae";
        dn3.textContent = "Taiga";
        dn4.textContent = "Jeanne";
    }
}

// Event listeners for the buttons
document.getElementById('check-button').addEventListener('click', updateUI);
document.getElementById('leftButton').addEventListener('click', plusOne);
document.getElementById('rightButton').addEventListener('click', minusOne);
changeTextButton.addEventListener('click', changeText);
// Initial UI update
updateUI();