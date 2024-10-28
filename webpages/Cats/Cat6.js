const image1 = document.getElementById('img1');
const image2 = document.getElementById('img1.1');
const image3 = document.getElementById('img1.2');
const mainImg = document.getElementById('mainImg');

image1.addEventListener('mouseover', function() {
    mainImg.src = '../../images/cat6.png';
});

image2.addEventListener('mouseover', function() {
    mainImg.src = '../../images/placeholder.png';
});

image3.addEventListener('mouseover', function() {
    mainImg.src = '../../images/placeholder.png';
});

function Link(){
    const url = "https://forms.gle/4fWNmqZ3vujs6P6H7";
    window.open(url)
    }