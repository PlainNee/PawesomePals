let number = 1; // Initialize the number variable
const c1 = document.getElementById('card1');
const c2 = document.getElementById('card2');
const c3 = document.getElementById('card3');
const c4 = document.getElementById('card4');
const dn1 = document.getElementById('dogname1');
const dn2 = document.getElementById('dogname2');
const dn3 = document.getElementById('dogname3');
const dn4 = document.getElementById('dogname4');
const d1 = document.getElementById('dogdesc1');
const d2 = document.getElementById('dogdesc2');
const d3 = document.getElementById('dogdesc3');
const d4 = document.getElementById('dogdesc4');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

function PlusOne() {
    number += 1;
    updateUI();}

function MinusOne() {
    number -= 1;
    updateUI();}

function openLink1() {
    if (number === 1) {
    window.location.href = 'Dogs/Dog1.html';}

    else if (number === 2) {
    window.location.href = 'Dogs/Dog5.html';}
}

function openLink2() {
    if (number === 1) {
    window.location.href = 'Dogs/Dog2.html';}

    else if (number === 2) {
    window.location.href = 'Dogs/Dog6.html';}
}

function openLink3() {
    if (number === 1) {
    window.location.href = 'Dogs/Dog3.html';
   
    }else if (number === 2) {
    window.location.href = 'Dogs/Dog7.html';}
}

function openLink4() {
    if (number === 1) {
    window.location.href = 'Dogs/Dog4.html';}

    else if (number === 2) {
    window.location.href = 'Dogs/Dog8.html';}
}


function updateUI() {
    if (number === 1) {
        leftButton.disabled = true;
        rightButton.disabled = false;
        var c1 = document.getElementById('card1');
        c1.src = '../images/dog1.png';
        var c2 = document.getElementById('card2');
        c2.src = '../images/dog2.png';
        var c3 = document.getElementById('card3');
        c3.src = '../images/dog3.png';
        var c4 = document.getElementById('card4');
        c4.src = '../images/dog4.png';
        console.log("Left and Right buttons disabled.");
        d1.innerHTML = "Meet Blanca, a lovable pup with a sleek black coat and an adorable head tilt. Playful, sweet, and full of charm!";
        d2.innerHTML = "Chichay the Chow Chow is a fluffy ball of cuteness with a soft golden-brown coat and an adorable pink tongue!";
        d3.innerHTML = "Spark is a Yorkshire Terrier with a silky, golden coat. His small size and cute face give him an energetic, lovable charm!";
        d4.innerHTML = "Mike is a cute Pug with a wrinkly face, big round eyes, and a soft fawn coat. His sweet expression is simply irresistible!";
        dn1.textContent = "Blanca";
        dn2.textContent = "Chichay";
        dn3.textContent = "Spark";
        dn4.textContent = "Mike";

    } else if (number === 2) {
        rightButton.disabled = true;
        leftButton.disabled = false;
        var c1 = document.getElementById('card1');
        c1.src = '../images/dog5.png';
        var c2 = document.getElementById('card2');
        c2.src = '../images/dog6.png';
        var c3 = document.getElementById('card3');
        c3.src = '../images/dog7.png';
        var c4 = document.getElementById('card4');
        c4.src = '../images/dog8.png';
        console.log("Left and Right buttons disabled.");
        d1.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d2.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d3.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        d4.innerHTML = "Lorem ipsum odor amet, consectetuer adipiscing elit. Semper ultricies pulvinar interdum netus iaculis curae.";
        dn1.textContent = "Terrance";
        dn2.textContent = "Celty";
        dn3.textContent = "Spike";
        dn4.textContent = "Luna";
    }
}

// Event listeners for the buttons
document.getElementById('check-button').addEventListener('click', updateUI);
document.getElementById('leftButton').addEventListener('click', plusOne);
document.getElementById('rightButton').addEventListener('click', minusOne);
changeTextButton.addEventListener('click', changeText);
// Initial UI update
updateUI();