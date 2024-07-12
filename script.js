"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const element = document.getElementById('super_link');
console.log(element);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const elements = document.querySelectorAll('.card-link');
elements.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const elementsCardBody = document.querySelectorAll('.card-body .card-link');
console.log(elementsCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const elementFirst = document.querySelector('[data-number="50"]');
console.log(elementFirst); 

// 5. Выведите содержимое тега title в консоль.
const titleEl = document.title;
console.log(titleEl);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const elementCardTitle = document.querySelector('.card-title');
console.log(elementCardTitle.parentNode);


// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraf = document.createElement('p');
paragraf.textContent = 'Привет!'; 
document.querySelector('.card').prepend(paragraf);
console.log(paragraf);

// 8. Удалите тег h6 на странице.
document.querySelector('h6').remove();
