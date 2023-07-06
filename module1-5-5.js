const userString = prompt('Введите текст для обрезки').trim();
console.log(userString);
const startSliceIndex = Number(
    prompt('Введите индекс, с которого нужно начать обрезку строки')
    .trim()
    );
console.log(startSliceIndex);
const endSliceIndex = Number(
    prompt('Введите индекс, которым нужно закончить обрезку строки')
    .trim()
);
console.log(endSliceIndex);

const string = userString.slice(startSliceIndex, endSliceIndex);
console.log(string);

alert(`Результат: ${string}`);