const userName = prompt('Как вас зовут?').trim().toLowerCase();
console.log(userName);

let modifyName = userName[0].toUpperCase() + userName.slice(1).replaceAll(' ','');
console.log(modifyName);

const userAge = Number(prompt('Сколько вам лет?').trim());
console.log(userAge)

alert(`Вас зовут ${modifyName} и вам ${userAge} лет`);