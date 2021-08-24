const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);

const products =[

               
               
               {name:'laptop' , price :80000, color:'black' },
               {name:'phone' , price :8000, color:'black' },
               {name:'ice-cream' , price :300, color:'chocklate' },
               {name:'pizza' , price :600, color:'my-favorate' }
]
const myProduct =products.map(products=>products.price);
 const myProduct2 =products.map(products=>products.name.color)
 console.log(myProduct2);
// products.map(products=> console.log(myProduct2)
//                );