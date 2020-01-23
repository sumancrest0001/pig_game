/* var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}
// real life example of inheretance.
Person.prototype.calculateAge = function(){
  console.log(2020 - this.yearOfBirth);
}
Person.prototype.lastName = 'Shrestha';
var john = new Person('John', 1997, 'software engineer');
john.calculateAge();
console.log(john.lastName);
*/
/*
//creating an object with Object.create
var personProto = {
  calculateAge: function(){
    console.log(2016 -this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1997;
john.job = 'teacher';

var jane = Object.create(personProto,
{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1994},
  job: {value: 'teacher'}
});
console.log(john);
console.log(jane);
*/
/*

// Primitives and Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//function
var age = 27;
var obj = {
  name: "suman",
  city: "Dumre"
};
function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
  console.log(a);
}

change(age, obj);
console.log(age);
console.log(obj.city);


*/
/*
// Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
// This calculateAge is callsed callback function as it is caled inside a function.
function calculateAge(el) {
  return 2020 - el;
}

console.log(arrayCalc(years, calculateAge));

*/
/*

// Function returning functions

function interviewQuestion(job) {
  if(job === 'designer'){
    return function(name){
      console.log(`${name}, can you please explain what UX design is?`)
    }
  } else if (job === 'teacher'){
    return function(name){
      console.log(`${name}, what is you qualification?`)
    }
  }
}
 let teacherQuestion = interviewQuestion('teacher');
 teacherQuestion('John');
 let designerQuestion = interviewQuestion('designer');
 designerQuestion('suman');


 function ageCalculator(year) {
   let ageOfUser = 2020 - year;
   if (ageOfUser < 18)
   {
     return function(user) {
       console.log(`${user}, you are not legal for driving`);
     }
   }else(ageOfUser >= 18)
   {
     return function(user) {
       console.log(`${user}, Welcome! you are legal for driving`);
     }
 }
}

ageCalculator(1994)('suman');

*/

/*
// Immediately invoked function expression this is used for data privacy not for reuse.
(function(){
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodluck){
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);


*/


/*
// Closures

function retirementCalculator(yearOfBirth){
  currentAge = 2020 - yearOfBirth;
  return function (retirementAge){
    if (retirementAge <= currentAge){
      console.log('You can retire now.');
    }else {
      console.log(retirementAge -currentAge + " years remaining for the retirement.");
    }
  }
}
let retirementUS = retirementCalculator(1984)(70);


function interviewQuestion(job){
  return function(name){
    if (job === 'designer')
    {
      console.log(`${name}, can you please explain what is UX design?`);
    }
    else if (job === 'teacher')
    {
      console.log(`${name}, What is your working experience?`);
    }
  }
}

let designerInterviewQuestion = interviewQuestion('designer');
designerInterviewQuestion('Suman');
*/


// Bind call and apply

var suman = {
  name: "Suman",
  age: 24,
  job: 'Software Engineer',
  presentation: function(style, timeOfDay){
    if(style === 'formal')
    {
      console.log(`Good ${timeOfDay} everyone, I'm ${this.name} from nepal and ${this.job} by profession. I'm ${this.age} years.`);
    }
   else if (style === 'friendly')
  console.log(`Good ${timeOfDay} friends, This is ${this.name} working as ${this.job}. I'm running at ${this.age}.`);
}
};

suman.presentation('formal', 'morning');
var john = {
  name: "John",
  age: 27,
  job: "teacher"
};

suman.presentation( 'friendly', 'evening');



// bind
var sumanFormal = suman.presentation.bind(suman, 'formal');
sumanFormal('evening');
sumanFormal('morning');
var johnFriendly = suman.presentation.bind(john, 'friendly');
johnFriendly('afternoon');
johnFriendly('night');
