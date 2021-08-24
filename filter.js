// const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
// const bigNumbers = numbers.filter(number => number > 20);
// const smallNumbers = numbers.filter(number => number < 10);
// // console.log(smallNumbers);

// const products = [
//     { name: 'water bottle', price: 50, color: 'yellow' },
//     { name: 'mobile phone', price: 15000, color: 'black' },
//     { name: 'smart watch', price: 3000, color: 'black' },
//     { name: 'sticky note', price: 30, color: 'pink' },
//     { name: 'water glass', price: 3, color: 'white' }
// ];

// const expensive = products.filter(product => product.price > 100);
// // console.log(expensive);
// const blacks = products.filter(product => product.color == 'pink');
// // console.log(blacks);

// const whiteItem = products.find(product => product.color == 'black');
// //console.log(whiteItem);


//
// diffrences between filter and find 
// filter = joto gula element pabe sob gula k dibe.element na thakle [] .emty string dekhabe .color.color.array er modhe thakbe .
// find =array r modhe thakbe na ...sorasori element dibe.element na pele undefind dekhBE.and just first element take send korbe .


// Practice 
const items =[{name :'chiken-kopta', prize:150},
{name :'chiken-kopta', prize:150},
{name :'butter-chiken', prize:450},
{name :'button-curry', prize:650},
{name :'beef-kopta', prize:550},

{name :'chiken-porota', prize:170},
{name :'chiken-kopta', prize:140},
{name :'alu-porota', prize:130},
{name :'chiken-malai-curry', prize:750},
{name :'chiken-biriany', prize:850},
{name :'chiken-pasta', prize:1500}]

const myfood = items.find(items=>items.name='chiken-kopta');
console.log(myfood);