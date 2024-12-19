const courseCard = document.getElementById('courseCard');
const infoCard = document.getElementById('infoCard');
const closeButton = document.getElementById('closeButton');

courseCard.addEventListener('click', function() {
    infoCard.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    infoCard.style.display = 'none';
});

const courseCard1 = document.getElementById('courseCard1');
const infoCard1 = document.getElementById('infoCard1');
const closeButton1 = document.getElementById('closeButton1');

courseCard1.addEventListener('click', function() {
    infoCard1.style.display = 'block';
});

closeButton1.addEventListener('click', function() {
    infoCard1.style.display = 'none';
});

const courseCard2 = document.getElementById('courseCard2');
const infoCard2 = document.getElementById('infoCard2');
const closeButton2 = document.getElementById('closeButton2');

courseCard2.addEventListener('click', function() {
    infoCard2.style.display = 'block';
});

closeButton2.addEventListener('click', function() {
    infoCard2.style.display = 'none';
});

//////////
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('galvbot');
const closeModalSpan = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalSpan.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('applicationForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Форма отправлена!');
    modal.style.display = 'none';
}