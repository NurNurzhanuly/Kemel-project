// date and time:
function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const formattedDate = now.toLocaleDateString('ru-RU', options);
    const formattedTime = now.toLocaleTimeString('ru-RU', options);

    dateTimeDisplay.textContent = `${formattedDate}`;
}

setInterval(updateDateTime, 1000);

// background color 
const button = document.getElementById('changeColorBtn');

let isBlack = true;

button.addEventListener('click', function() {
    document.body.style.backgroundColor = isBlack ? '#FFFFFF' : '#000000';
    isBlack = !isBlack;
});

// open form
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// faq form
document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('changeColorBtn');
    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Form submission
    document.getElementById('faqForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const question = document.getElementById('question').value.trim();
        const responseMessage = document.getElementById('responseMessage');

        responseMessage.textContent = '';

        if (name === '' || phone === '' || question === '') {
            responseMessage.textContent = 'Пожалуйста, заполните все поля.';
            responseMessage.className = 'text-danger';
            return;
        }

        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phone)) {
            responseMessage.textContent = 'Пожалуйста, введите правильный номер телефона.';
            responseMessage.className = 'text-danger';
            return;
        }

        responseMessage.textContent = 'Ваш вопрос был успешно отправлен!';
        responseMessage.className = 'text-success';

        const audio = new Audio('notification.mp3');
        audio.play();

        document.getElementById('faqForm').reset();
    });

    document.getElementById('resetForm').addEventListener('click', function() {
        document.getElementById('faqForm').reset();
        document.getElementById('responseMessage').textContent = '';
    });
});
