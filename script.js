// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// const element = document.querySelectorAll('.dropdown-item');
// element.forEach(el => el.classList.add('super-dropdown'));
// console.log(element);
// console.log(element.parentNode);
// const element1 = document.querySelector('.dropdown-item');
// console.log(element1);
//---------------------------------------------------------------------------
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// const element2 = document.querySelector('.btn');
// element2.classList.toggle('btn-secondary');
// console.log(element2);
//---------------------------------------------------------------------------
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// const element3 = document.querySelector('.menu');
// element3.classList.remove('dropdown-menu');
// console.log(element3);
//--------------------------------------------------------------------------
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// const elemrnt4 = document.querySelector('div.dropdown');
// elemrnt4.insertAdjacentHTML('afterend', '<a href="#">link</a>');
// console.log(elemrnt4);
//----------------------------------------------------------------------------
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// const element5 = document.getElementById('dropdownMenuButton');
// element5.id = 'superDropdown';
// console.log(element5);
//----------------------------------------------------------------------------
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// const element6 = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// element6.dataset.dd = "3";
// console.log(element6);
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const element7 = document.querySelector('.dropdown-toggle');
element7.removeAttribute('type');
console.log(element7);