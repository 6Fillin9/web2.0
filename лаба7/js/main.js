// Задание 1

let bread = prompt ('Введите количество хлеба');
let cheese = prompt('Введите количество сыра'); 

const product={
    "bread":bread,
    "cheese":cheese
}

function countSandwiches(product){
    const breadsForSandwich = Math.floor(product.bread/2)
    if (breadsForSandwich > product.cheese) {
        return product.cheese
    }
    return breadsForSandwich
}
    console.log(' Задание 1 - ' + countSandwiches(product));


// Задание 2

let number = prompt('Введите число для таблицы умножения')
let brush = 0
function multiplication(number) {
    columns = number
    rows = number
    if (brush === 0) {
        let result = [];
        for (let startRow=0;  startRow < rows; startRow++){
            if (startRow === 0) {
                result.push('#');
            } else{
                result.push(startRow);
            }
            
        }
        let myVar3 = result.join(' ')
        console.log(myVar3)
    }
    for (let startColumn=0;  startColumn < columns; startColumn++){
        let result = [];
        if (startColumn > 0) {
            result.push(startColumn);
            for (let startRow=1;  startRow < rows; startRow++){
                if (startColumn*startRow !=0){
                    result.push(startColumn*startRow);
                }
            }
            let myVar3 = result.join(' ')
            console.log(myVar3)
        }
        
    }
}
multiplication(number);

// Задание 3

let message = prompt('Введите сообщение');
message=message.split(' ');
function distribution (message){
    let max = 0;
    for (let startArray=0;  startArray < message.length; startArray++){
        let ln = message[startArray]
        if (ln.length > max) {
            ln = message[startArray]
            max = ln.length
        }
    }
    let zwe='*'
    let space=' '
    console.log(zwe.repeat(max+4))
    for (let elementArray=0;  elementArray < message.length; elementArray++){
        let lenWhiteSpace = max-message[elementArray].length
        console.log(`* ${message[elementArray]}${space.repeat(lenWhiteSpace)} *`)
    }

    console.log(zwe.repeat(max+4))
}

distribution (message)

// Задание 4

let array1 = prompt('Введите первый массив');
let array2 = prompt('Введите второй массив');
array1=array1.split(' ');
array2=array2.split(' ');

let array = [];
function mergeArrays(array1, array2) {
    const merged = [];
    const maxLength = Math.max(array1.length, array2.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < array1.length) {
        merged.push(array1[i]);
      }
      if (i < array2.length) {
        merged.push(array2[i]);
      }
    }
    return merged;
}
console.log(mergeArrays(array1, array2))

// Задание 5


let arr = prompt('Введите ваш массив');
arr=arr.split(' ');
function countUniqueValues(arr) {
    // создаем пустой объект
    let obj = {};
    
    // проходимся по каждому элементу массива и увеличиваем количество по соответствующему ключу в объекте
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
    console.table(obj);
    return obj;
}


countUniqueValues(arr);

// Задание 6

const burgerMenu = document.querySelector('.burgerMenu');
    const handleBurgerClick = (evt) => {
      evt.preventDefault();
      burgerMenu.classList.toggle('active');
      menuList.classList.toggle('show');
    }
    burgerMenu.addEventListener('click', handleBurgerClick);

    const menuList = document.querySelector('.menu-list');

// Задание 7
document.addEventListener('DOMContentLoaded', function() {
    var notification = document.getElementById('notification');
    var closeButton = document.getElementById('closeButton');
  
    // Функция для показа уведомления с заданными данными
    function showNotification(data) {
      var name = document.getElementById('name');
      var message = document.getElementById('message');
  
      name.textContent = data.name;
      message.textContent = data.message;
  
      notification.classList.add('show');
  
      // Закрываем уведомление по клику на кнопку закрытия
      closeButton.addEventListener('click', function() {
        hideNotification();
      });
    }
  
    // Функция для скрытия уведомления
    function hideNotification() {
      notification.classList.remove('show');
    }
  
    // Пример данных для уведомления
    var notificationData = {
      name: 'Всем привет!',
      message: 'Меня зовут Стаскевич Денис',
    };
  
    // Показываем уведомление при загрузке страницы
    showNotification(notificationData);
  });
  

      
      



