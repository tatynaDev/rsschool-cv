// function myLanguages(results) {
// //   let r =  Object.entries(results).filter(el => el[1] >= 60).map(el => el[0])
// //   let res = Object.values(results).sort((a,b) => a - b).reverse().filter(el => el >= 60)
// let result = [];
//   for (let i in results) {
//     if (results[i] > 59) {
//       result.push(i);
//     }
//   }
//   return result.sort((a, b) => results[b] - results[a]);
// }
//   console.log(myLanguages({
//     "Java" : 10,
//    "Ruby" : 80,
//     "Python" : 65
// }));

// console.log(myLanguages(
//     {"Hindi" : 60,
//      "Greek" : 71, 
//     "Dutch" : 93}
// ))

// //.filter(el => el[1] >= 60).map(el => el[0])


// function formatDuration (seconds) {
//     var time = { 
//         year: 31536000, 
//         day: 86400, 
//         hour: 3600, 
//         minute: 60, 
//         second: 1 
//     },
//         res = [];
  
//     if (seconds === 0) return 'now';
    
//     for (var key in time) {
//       if (seconds >= time[key]) {
//         var val = Math.floor(seconds/time[key]);
//         res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//         seconds = seconds % time[key];
//       }
//     }
   
//     return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
//   }

//   console.log(formatDuration(3600));


// let name = 'Vasia'
// name[3] = 'y';
// console.log(name)

// const RS = 'rs'
// console.log('css', RS, 'js')

// console.log(0.32 * 0.22 * 0.75)
// let a = true
// let b = true
// console.log(!(!a && !b));
// console.log(!a && !b)

// let name = 'Vasia';
//  name.length = 50

// console.log( Math.min(10, 222, -5, 0, '-33'))

console.log(1/0)
let a = 5; 
console.log(++a); 
console.log(a++);

console.log(typeof null)
console.log(typeof number)
console.log(typeof string)
console.log(typeof NaN)
console.log(typeof BigInt)
console.log(typeof Infinity)
console.log(4 * 'five')

let message = 'hello'

console.log('\nHey!'[1])
let first = 1;
 first = 2;
