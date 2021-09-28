"use strict";

/* const numbers = [1, 2, 3, 4, 5];

/* const newNumbers =  numbers.map(function (number) {
    return number + 1
}) */

/* const total = numbers.reduce(function (total, next) {
    return total + next
})
console.log(total)

/* console.log(numbers)
console.log(newNumbers) */
//----------------------------------------------

/* const todos = [
    { text: 'lavar a louça', done: true },
    { text: 'apanhar o lixo', done : true },
    { text: 'dobrar as roupas', done : true},
] */

/* const doneTodos = todos.filter(function (todo) {
    return todo.done == true
    //return todo.done == 'dobrar as roupas' 
})

console.log(doneTodos) */

/* const find = todos.find(function (todo) {
    return todo.text == 'dobrar as roupas'
})

console.log(find) */

/* const index = todos.findIndex(function (todo) {
    return todo.text == 'dobrar as roupas'
})

console.log(index) */
//------------------------------------------------
var cars = ["fusca", "civic", "hb20"];
var hasFusca = cars.some(function (car) {
  return car == "bmw";
});
console.log(hasFusca);
