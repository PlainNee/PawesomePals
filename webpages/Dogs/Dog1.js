const image1 = document.getElementById('img1');
const image2 = document.getElementById('img1.1');
const image3 = document.getElementById('img1.2');
const mainImg = document.getElementById('mainImg');

image1.addEventListener('mouseover', function() {
    mainImg.src = '../../images/dog1.png';
});

image2.addEventListener('mouseover', function() {
    mainImg.src = '../../images/dog1.1.png';
});

image3.addEventListener('mouseover', function() {
    mainImg.src = '../../images/dog1.2.png';
});

function Link(){
    const url = "https://forms.gle/4fWNmqZ3vujs6P6H7";
    window.open(url)
    }