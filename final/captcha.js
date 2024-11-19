const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const RECAPTCHA_SECRET_KEY = '6LcSyYMqAAAAAI79eBsz0uYLaR9aqyDwIh3XZSRc'; // Замените на ваш Secret Key

app.post('/submit-form', async (req, res) => {
    const recaptchaResponse = req.body.recaptchaResponse;

    // Проверяем капчу через Google API
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
    
    try {
        const response = await axios.post(verificationUrl);
        if (response.data.success) {
            // Капча пройдена успешно, можно продолжить обработку формы
            res.send('Форма успешно отправлена');
        } else {
            res.status(400).send('Ошибка капчи. Попробуйте еще раз.');
        }
    } catch (error) {
        res.status(500).send('Ошибка сервера. Попробуйте позже.');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});



const axios = require('axios');

app.post('/submit-form', async (req, res) => {
    const recaptchaResponse = req.body.recaptchaResponse;

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=LcSyYMqAAAAAI79eBsz0uYLaR9aqyDwIh3XZSRc&response=${recaptchaResponse}`;

    try {
        const response = await axios.post(verificationUrl);
        if (response.data.success) {
            res.send('Форма успешно отправлена!');
        } else {
            res.status(400).send('Ошибка капчи. Попробуйте еще раз.');
        }
    } catch (error) {
        res.status(500).send('Ошибка сервера. Попробуйте позже.');
    }
});