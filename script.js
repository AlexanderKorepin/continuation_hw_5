// Урок 10. Семинар. Работа с JSON
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).
const divEl = document.createElement('div');
const bodyEl = document.querySelector('body');
bodyEl.appendChild(divEl);
const parseData = JSON.parse(dataInfo);
console.log(parseData);
parseData.message.forEach(element => {
    divEl.insertAdjacentHTML('beforeend', `
    <figure>
    <img src="${element}" alt="cat" />
    <p>the best cat</p>
    </figure>`
)
});
