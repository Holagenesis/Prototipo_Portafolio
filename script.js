let text = document.getElementById('text');

let img5 = document.getElementById('img5');
let img3 = document.getElementById('img3');
let img2 = document.getElementById('img2');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 5.5 + 'px';
    text.style.marginBottom = value * 3.5 + 'px';
    img3.style.left = value * -1.5 + 'px';
    img2.style.left = value * -1.5 + 'px';
});