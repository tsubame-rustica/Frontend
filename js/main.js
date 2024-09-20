
let index = 0;


let flower_element = document.querySelectorAll('ul#flower-list li');


for (let i = 0; i < flower_element.length; i++) {
    flower_element[i].addEventListener('click', function() {
        index = flower_element[i].data
        showModal(index);
    });
}


const modal = document.getElementById('modal');

function showModal(idx) {
    modal.style.display = 'block';
}

const close = document.querySelector('.close-bg');

close.addEventListener('click', function() {
    modal.style.display = 'none';
=======
let index = 0;


let flower_element = document.querySelectorAll('ul#flower-list li');


for (let i = 0; i < flower_element.length; i++) {
    flower_element[i].addEventListener('click', function() {
        index = flower_element[i].data
        showModal(index);
    });
}


const modal = document.getElementById('modal');

function showModal(idx) {
    modal.style.display = 'block';
}

const close = document.querySelector('.close-bg');

close.addEventListener('click', function() {
    modal.style.display = 'none';

});