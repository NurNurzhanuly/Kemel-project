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

// Открытие попапа и включение overlay
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
  
  // Закрытие попапа и overlay
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  // Закрытие всех попапов при клике на overlay
  function closeAllPopups() {
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('signupPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  // Функция для регистрации пользователя
  function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    
    if (localStorage.getItem(username)) {
      alert('Пользователь уже существует');
    } else {
      localStorage.setItem(username, password);
      alert('Регистрация успешна!');
      closePopup('signupPopup');
    }
  }
  
  // Функция для входа пользователя
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword === password) {
      alert('Вход выполнен');
      localStorage.setItem('loggedIn', username);  // Сохраняем состояние входа
      closePopup('loginPopup');
      updateAuthState();
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  }
  
  // Функция для выхода
  function logout() {
    localStorage.removeItem('loggedIn');  // Удаляем состояние входа
    updateAuthState();
  }
  
  // Обновление состояния кнопок входа и выхода
  function updateAuthState() {
    const loggedInUser = localStorage.getItem('loggedIn');
    
    if (loggedInUser) {
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('signupBtn').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'inline-block';
    } else {
      document.getElementById('loginBtn').style.display = 'inline-block';
      document.getElementById('signupBtn').style.display = 'inline-block';
      document.getElementById('logoutBtn').style.display = 'none';
    }
  }
  
  // Инициализация состояния при загрузке страницы
  updateAuthState();
  
  // Функция для применения сохранённой темы при загрузке страницы
  function applySavedTheme() {
    const isBlack = localStorage.getItem('isBlack') === 'true';
    document.body.style.backgroundColor = isBlack ? '#000000' : '#FFFFFF';
  }
  
  // Функция для смены темы
  function toggleTheme() {
    const isBlack = document.body.style.backgroundColor === 'rgb(0, 0, 0)';
    document.body.style.backgroundColor = isBlack ? '#FFFFFF' : '#000000';
    localStorage.setItem('isBlack', !isBlack);  // Сохраняем новое состояние темы
  }
  
  // Применяем сохранённую тему при загрузке страницы
  applySavedTheme();
  
  // Обработчики событий для кнопок
  document.getElementById('loginBtn').addEventListener('click', () => openPopup('loginPopup'));
  document.getElementById('signupBtn').addEventListener('click', () => openPopup('signupPopup'));
  document.getElementById('logoutBtn').addEventListener('click', logout);
  document.getElementById('changeColorBtn').addEventListener('click', toggleTheme);
  

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
