// function makeNegative(num) {
//     if (num <= 0) {
//      return num;
//    }
//    return num * -1;
//  }

// // function makeNegative(num) {
// //     if (num > 0) {
// //         return -num;
// //     }
// //     else {
// //         return num;
// //     }
// // }

// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));


// function arrayPlusArray(arr1, arr2) {
//     return arr1.reduce((sum, num, index) => sum + num + arr2[index], 0);
// }

// console.log(arrayPlusArray(arr1, arr2));

// let range = {
//     from: 1,
//     to: 5
//   };

// let range = {
//     from: 1,
//     to: 5
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function () {

//     // ...it returns the iterator object:
//     // 2. Onward, for..of works only with the iterator object below, asking it for next values
//     return {
//         current: this.from,
//         last: this.to,

//         // 3. next() is called on each iteration by the for..of loop
//         next() {
//             // 4. it should return the value as an object {done:.., value :...}
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// // now it works!
// for (let num of range) {
//     alert(num); // 1, then 2, 3, 4, 5
// }

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// };

// for (let num of range) {
//     alert(num); // 1, then 2, 3, 4, 5
// }

// var str = 'abbacc';
// var index = str.indexOf(input); 
// var pair = str.substring(index, index + 2);
// console.log(pair);

////////////////////////////////////================================================//////////////////////
// var str = 'abbacc';
// var pairs = [];

// for (var i = 0; i < str.length - 1; i++) {
//   if (str[i] === str[i+1]) {
//     pairs.push(str.slice(i, i+1));
//     i++;
//   }
// }

// console.log(pairs[0]);

// var arr = [
//   {id:1, name:'fozil'},
//   {id:2, name:'odil'},
//   {id:3, name:'alibek'},
//   {id:4, name:'elyor'},
// ]

// function onSearch(text){
//   var filteredArr = arr.filter(function(obj){
//     return obj.name.includes(text);
//   });
//   return filteredArr
// }

// console.log(onSearch('a'));


//============================/////////////////////////================//////////////////////////

// const letters = ['fozil'];

// letters.reverse();

// console.log(reverse);
 

// const letters=  reverse_letters(word):
//     reversed_word = ''.join(reversed(word))
//     return reversed_word

//     console.log(reverse_letters("Fozil"));

// const str = "Fozil"
// function reverseAString(str) {
//    return str.split("").reverse("").join("");
// }
// console.log(`Reversed string is: ${reverseAString(str)}`)
console.log('hey bro');
console.log('git hubc');

