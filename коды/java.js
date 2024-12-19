const registerBtn = document.getElementById('createPopup');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupMessage = document.getElementById('popupMessage');
const registrationForm = document.getElementById("registrationForm");

function openPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = registrationForm.querySelector('input[type=text]').value.trim();
    const phone = registrationForm.querySelector('input[type=tel]').value.trim();
    const email = registrationForm.querySelector('input[type=email]').value.trim();

    if (name && phone && email) {
        openPopup("Спасибо за регистрацию!");
        registrationForm.reset();и
    } else {
        openPopup("Пожалуйста, заполните все поля.");
    }
});

closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});

///////

document.getElementById('herotext').addEventListener('click', function() {
    const targetSection = document.getElementById('target');
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

//////////////////////
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
