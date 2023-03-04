//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
      const sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2) { return n1 * n2 }
// console.log(cb(3,3,mul))
//5) Call cb, this time with an anonymous function that divides the first argument with the second
// console.log(cb(2,2,((n1,n2) => n1/n2)))


// 1) Declare a JavaScript array and initialise it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik','Sebastian','Tommy','Marcus']
const myNames = names.filter(n => n.length <= 3 )
// myNames.forEach(n => console.log(`this is a short name ${n}`))
// names.forEach(n => console.log(`this is a name ${n}`))

//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
const uppercasedNames = names.map(n => n.toUpperCase)


// 3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
// <ul>
//   <li>Lars</li>
//   <li>Peter</li>
//   <li>Jan</li>
//   <li>Ian</li>
// <ul>

function htmlNames (names) {
    const newNames = names.map(n => `<li>${n}</li>`).join("")
    return `<ul>${newNames}</ul>`
}

//console.log(htmlNames(names))

// 4)  Given this JavaScript array
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
// a) Use the filter filter function to get arrays with only:
// Cars newer than 1999
// Al  Volvo’s
// All cars with a price below 5000

const newerCars = cars.filter(car => car.year > 1999 )
const onlyVolvo = cars.filter(car => car.make === 'Volvo' )
const cheapCars = cars.filter(car => car.price < 5000 )

// 4a) (Extra, ONLY if you have time) Use map, join + just a little bit more to implement a function, that , 
// given the cars array used above, will create, and return a string with valid SQL statements to insert the 
// data into a table with matching column names (id, year, make, model, price) as sketched below:
// INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );

function createInsertStatements(cars) {
    const columns = ['id', 'year', 'make', 'model', 'price']
    const values = cars.map((car) => {
      return `(${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price})`
    })
    const insertStatements = `INSERT INTO cars (${columns.join(',')}) VALUES ${values.join(',')};`
    return insertStatements;
  }

// a) Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback as the second and returns a new (filtered) 
//   array according to the code provided in the callback. Test the method with the same array and callback as in the example with the original filter method.

function myFilter(array, callback) {
    const filtered = []
    array.forEach(element => {if (callback(element)) { filtered.push(element) }})
    return filtered
}

const numbers = [1,2,3,4,5,0]
// console.log(myFilter(numbers,n=> n < 3))
// console.log(numbers.filter(n => n < 3))


// b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.
function myMap(array, callback) {
    const mapped = []
    array.forEach(element => { mapped.push(callback(element)) })
    return mapped
}

// console.log(myMap(numbers,n=>n*2))
// console.log(numbers.map(n => n*2))

// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
// console.log("aaaaaaaaaa");
// msgPrinter ("bbbbbbbbbb",2000);
// console.log("dddddddddd");
// msgPrinter ("eeeeeeeeee",1000);
// console.log("ffffffffff");

// 1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
// Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.

const myObj = []
myObj.age = 10,
myObj.mood = 'happy',
myObj.small = true,
myObj.email = 'gmail.com'


for(prop in myObj){
  console.log(prop,myObj[prop])
}

// Use the delete keyword to demonstrate we can delete existing properties from an object (delete a property, and iterate over the properties again) 
// Add a new property to your object to demonstrate that we can add new properties to existing objects

delete myObj.small

for(prop in myObj){
    console.log(prop,myObj[prop])
  }
  

//   function createPerson(name, age) {
//     return {
//       setAge: function(newAge) {
//         age = newAge;
//       },
//       setName: function(newName) {
//         name = newName;
//       },
//       getInfo: function() {
//         return name + ", " + age;
//       }
//     };
//   }
  
//   var person1 = createPerson("Peter", 45);
//   var person2 = createPerson("Sarah", 30);
  
//   console.log(person1.getInfo()); // logs "Peter, 45"
//   console.log(person2.getInfo()); // logs "Sarah, 30"
  
//   person1.setAge(50);
//   console.log(person1.getInfo()); // logs "Peter, 50"
  