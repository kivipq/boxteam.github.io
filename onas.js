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