let line = document.getElementById("line");

line.style.width = '72%'; 
line.style.height = '3px'; 


let man = ['22.10.1945','Мужской', 'Рекрутер']
document.getElementById("demo").innerHTML = man


function calculatePrice() {
    // Поля формы
    let course = document.querySelector('input[name="course"]:checked').value;
    let lang = document.querySelector('select[name="lang"]').value;
    let education = document.querySelector('input[name="education"]:checked').value;
 
    // стоимость
    let coursePrice = 0;
    switch (course) {
     case 'first':
      coursePrice += 100;
      break;
     case 'second':
      coursePrice += 150;
      break;
     case 'third':
      coursePrice += 200;
      break;
    }

    switch (lang) {
        case 'ru':
         coursePrice += 100;
         break;
        case 'en':
         coursePrice += 150;
         break;
        case 'ge':
         coursePrice += 200;
         break;
    }
 
    // полная стоимость
    let totalPrice = coursePrice
    if (education == 'part-time') {
     totalPrice *= 0.75; // заочка
    } else if (education == 'distance') {
     totalPrice *= 0.5; // дистанционка
    }
 
    // рез
    let result = document.querySelector('#result');
    result.innerHTML += 'Полная стоимость обучения: ' + totalPrice + ' руб.\n';

}