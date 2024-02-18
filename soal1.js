/* 
Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x) 
*/

const prompt = require('prompt-sync')({sigint:true});
const x = prompt("Input value: ");

if (x < 0) {
    console.log("Tidak bisa input bilangan negatif");
} else if (x%2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
} else {
    console.log(Math.sqrt(x));
}