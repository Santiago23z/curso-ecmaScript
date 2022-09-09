// arrays destructure

let fruits = ['apple', 'lemon'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = { username: 'oscar', age: 17};
let {username, age} = user;
console.log(username, user.age);

// spread operator

let person = {name: 'oscar', age: 28};
let country = 'Mx';

let data = { ...person, country }
console.log(data);

// paramans rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
   /*  return num + values[0]; */
}

sum(1, 7, 2, 2, 3);