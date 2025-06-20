const express = require('express');
const app = express();
const port = 3000;

// Сервер отдаёт файлы из директории static
app.use(express.static(__dirname));

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен! Доступен по адресу http://localhost:${port}/`);
});