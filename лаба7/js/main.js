//Задание 1
const countSandwiches = (bread, cheese) => {
  let countSandwiches = Math.trunc(bread / 2);

  if (bread < 2 || cheese < 1) {
    return "The sandwich requires at least two slices of bread and one slice of cheese";
  } else if (countSandwiches <= cheese) {
    return countSandwiches;
  } else {
    while (countSandwiches > cheese) {
      countSandwiches -= 1;
      if (countSandwiches === cheese) {
        return countSandwiches;
      }
    }
  }
};

let bread = 5;
let cheese = 6;
console.log(
  `countSandwiches({bread: ${bread}, cheese: ${cheese}}) -> ${countSandwiches(
    bread,
    cheese
  )}`
);

//Задание 2
const generateMultiplicationTable = (number) => {
  let output = "";
  for (let i = 1; i <= number; i++) {
    let row = " ";
    for (let j = 1; j <= number; j++) {
      row += "  " + i * j;
    }
    output += row + "\n";
  }
  return output;
};

let number = 5;
console.log(
  `generateMultiplicationTable(5)\n\n>\n\n${generateMultiplicationTable(
    number
  )}`
);

//Задание 3
const showQuote = (arrWord, symbol) => {
  symbol = String(symbol);

  let maxLen = 0;
  let outString = "";

  arrWord.forEach((word) => {
    if (word.length >= maxLen) {
      maxLen = word.length;
    }
  });

  maxLen += 4;
  outString += symbol.repeat(maxLen) + "\n";
  arrWord.forEach((word) => {
    outString +=
      symbol +
      " " +
      word +
      " ".repeat(maxLen - word.length - 3) +
      symbol +
      "\n";
  });
  outString += symbol.repeat(maxLen) + "\n";
  return outString;
};

let arr = ["Hello", "World", "In", "JS"];
let symbol = "*";
console.log(`showQuote([${arr}], '${symbol}')\n\n>\n${showQuote(arr, symbol)}`);

//Задание 4
const combineArrays = (arrFirst, arrSecond) => {
  let outArr = [];
  let lengthArrFirst = arrFirst.length;
  let lengthArrSecond = arrSecond.length;

  if (lengthArrFirst >= lengthArrSecond) {
    for (let i = 0; i < lengthArrFirst; i++) {
      outArr.push(arrFirst[i]);
      if (i < lengthArrSecond) {
        outArr.push(arrSecond[i]);
      }
    }
  } else {
    for (let i = 0; i < lengthArrSecond; i++) {
      if (i < lengthArrFirst) {
        outArr.push(arrFirst[i]);
      }
      outArr.push(arrSecond[i]);
    }
  }
  return outArr;
};

let arrFirst = [1, 2, 3];
let arrSecond = ["a", "b", "c", "d"];
console.log(
  `combineArrays([${arrFirst}], [${arrSecond}]) -> [${combineArrays(
    arrFirst,
    arrSecond
  )}]`
);

//Задание 5

const countUniqueValues = (arr) => {
  let uniqueArr = {};
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    if (uniqueArr[a] !== undefined) {
      ++uniqueArr[a];
    } else {
      uniqueArr[a] = 1;
    }
  }
  return uniqueArr;
};

let noUniqueArr = [1, 2, 1, 2, 3, 4, 2, 5];
console.log(`countUniqueValues([${noUniqueArr}]) ->`);
console.log(countUniqueValues(noUniqueArr));

// Задание 6

const burgerMenu = document.querySelector(".burgerMenu");
const closeMenuButton = document.querySelector(".close");
const menuList = document.querySelector(".menu-list");

const handleBurgerClick = (evt) => {
  evt.preventDefault();
  burgerMenu.classList.toggle("active");
  menuList.classList.toggle("show");
};

const closeMenu = () => {
  burgerMenu.classList.remove("active");
  menuList.classList.remove("show");
};

burgerMenu.addEventListener("click", handleBurgerClick);

document.addEventListener("click", (evt) => {
  if (!burgerMenu.contains(evt.target) && !menuList.contains(evt.target)) {
    closeMenu();
  }
});

// Задание 7
document.addEventListener("DOMContentLoaded", function () {
  var notification = document.getElementById("notification");
  var closeButton = document.getElementById("closeButton");

  function showNotification(data) {
    var name = document.getElementById("name");
    var message = document.getElementById("message");

    name.textContent = data.name;
    message.textContent = data.message;

    notification.classList.add("show");

    closeButton.addEventListener("click", function () {
      hideNotification();
    });
  }

  function hideNotification() {
    notification.classList.remove("show");
  }

  var notificationData = {
    name: "Всем привет!",
    message: "Меня зовут Стаскевич Денис",
  };

  showNotification(notificationData);
});
