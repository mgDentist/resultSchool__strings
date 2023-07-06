import { finalText } from "./module1-5-1.js";

let myInfoText = finalText
    .replaceAll('JavaScript', 'javascript')
    .replaceAll('курс','КУРС');

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);