const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Путь к папке с публичными файлами
const publicPath = path.join(__dirname, 'public');

// Статический доступ к файлам в папке 'public'
app.use(express.static(publicPath));

// Маршруты для разных страниц
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'photo.html')); // Предполагается файл index.html по умолчанию
});
app.get('/dinya', (req, res) => {
  res.sendFile(path.join(publicPath, 'dinya.html'));
});
app.get('/arbuz', (req, res) => {
  res.sendFile(path.join(publicPath, 'arbuz.html'));
});
app.get('/persik', (req, res) => {
  res.sendFile(path.join(publicPath, 'persik.html'));
});
app.get('/yabloka', (req, res) => {
  res.sendFile(path.join(publicPath, 'yabloka.html'));
});


app.get('/limon', (req, res) => {             
    res.sendFile(path.join(publicPath, 'limon.html'));
});


app.get('/ananas', (req, res) => {
    res.sendFile(path.join(publicPath, 'ananas.html'));
});


app.get('/kiwi', (req, res) => {
    res.sendFile(path.join(publicPath, 'kiwi.html'));
});

app.get('/mandarin', (req, res) => {
    res.sendFile(path.join(publicPath, 'mandarin.html'));
});






// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
