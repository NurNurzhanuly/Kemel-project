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

// faq форма
document.addEventListener('DOMContentLoaded', function () {
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

// Функция для регистрации пользователя
function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  if (localStorage.getItem(username)) {
      alert('Пользователь уже существует');
  } else {
      const userData = { password, theme: 'light' }; 
      localStorage.setItem(username, JSON.stringify(userData));
      alert('Регистрация успешна!');
      document.getElementById('signupForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
  }
}

// Функция для входа пользователя
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  const userData = JSON.parse(localStorage.getItem(username));

  if (userData && userData.password === password) {
      alert('Вход выполнен');
      localStorage.setItem('loggedIn', username);
      updateAuthState();
      applyTheme();
  } else {
      alert('Неверное имя пользователя или пароль');
  }
}

// Функция для выхода
function logout() {
  localStorage.removeItem('loggedIn');
  updateAuthState();
  applyTheme();
}

// Обновление состояния интерфейса для аутентификации
function updateAuthState() {
  const loggedInUser = localStorage.getItem('loggedIn');

  if (loggedInUser) {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('signupForm').style.display = 'none';
      document.getElementById('loggedInContent').style.display = 'block';
      document.getElementById('username').innerText = loggedInUser;
  } else {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('signupForm').style.display = 'none';
      document.getElementById('loggedInContent').style.display = 'none';
  }
}

const changeColorBtn = document.getElementById('changeColorBtn');

// Функция для смены темы
function toggleTheme() {
    const isDarkTheme = localStorage.getItem('theme') === 'dark';
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#ffffff';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.style.backgroundColor = '#333333';
        localStorage.setItem('theme', 'dark');
    }
}

// Применение сохраненной темы при загрузке страницы
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.style.backgroundColor = '#333333';
    } else {
        document.body.style.backgroundColor = '#ffffff';
    }
}

// Функция для переключения между формами
function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

changeColorBtn.addEventListener('click', toggleTheme);

applySavedTheme();

// Обработчики для кнопок аутентификации
document.getElementById('loginFormContent').addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});

document.getElementById('signupFormContent').addEventListener('submit', function(event) {
  event.preventDefault();
  signup();
});

document.getElementById('logoutBtnAuth').addEventListener('click', logout);

// Обработчики для ссылок переключения форм
document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    showSignupForm();
  });
  
  document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    showLoginForm();
  }); 

updateAuthState();

// Поп-ап форма
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('feedbackForm').addEventListener('clear', function(event) {
    });
});