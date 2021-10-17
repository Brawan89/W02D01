//function

//1
const sum = function (a, b) {
    return  a + b ;
  };
sum(5, 10); // => 15
sum(15, 10); // => 25

//2
const average = function (a, b) {
    return (a +b) /2 ;
};
average(20, 5); // => 12.5
average(10, 20); // => 15

//3
const findFactorial = function(num){
   if (num === 0 || num === 1){
        return 1;
    }
   else {
        return num * findFactorial(num-1);
    }
}
    /*
    Examples:
    findFactorial(1) // => 1
    findFactorial(3) // => 6
    findFactorial(4) // => 24
    findFactorial(6) // => 720
    findFactorial(11) // => 39916800
    */

//4
const round = function (number) {
    return Math.round(number);
};    
round(5); // => 5
round(2.4); // => 2
round(0.8); // => 1
round(1.7); // => 12

//5
const toThePowerOf = function (base, exponent) {
    return Math.pow(base , exponent);
};    
toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81

//6
const randomNumber = function () {
    return Math.random();
};     
randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673
randomNumber(); // => 0.43265697184952523

//7
const oneOrZero = function () {
    return  Math.floor(Math.random() * 2);
 };
oneOrZero(); // => 1
oneOrZero(); // => 1
oneOrZero(); // => 0
  

//8
const randomRange = function (number) {
    if (number > 0){
        return Math.floor(Math.random()*number);
       }
    else{
        return 'enter positive number';
       }
};
// 10 and 0 are included
randomRange(10); // => 10
randomRange(10); // => 7
randomRange(10); // => 1
randomRange(10); // => 0

//9
const includeOf = function (string, character) {
    return string.includes(character)   // Returns true
};
includeOf("Hello", "h"); // => false
includeOf("hello", "h"); // => true
includeOf("hello", "a"); // => false
includeOf("World", "r"); // => true
includeOf("World", "a"); // => false

//------------------------------------------------------------------------------





//Array...

//1
const addToArray = function (array, string) {
     array.push(string);
     return array;
};
  
  addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
  addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]

//2
const convertToString = function (array) {
   let a= array.join(' ');
   return a;
  };
convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"


//3 
// the array values are unique, no duplicate values in the array
const updateValue = function (array, index, value) {
    if(array.length <= index){
        return "there is no element to updated in this index";
    }
    else{
        array[index] = value;
        return array;
    }
};
updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]


//4  not done yet
/* const onlyString = function (array) {
    for (let i = 0; i < array.length; i++) {
        let newArr = typeof array[i] == "";
        return newArr = array.filter();
    }
  };
  onlyString(["one",12,"hi",true , 88 , "12"]); // => ["one","hi","12"]
  onlyString([10, 20, 30, 40, 50, 60,false]); // => [] */

  
//5
const users = [
    ["Jane", "123456" ],
    ["admin", "abc123" ],
  ];
const login = function (username, password) {
    
        if (username == users[0][0] && password == users[0][1]) {
            return "Login Successful"; 
        }
        else if (username == users[1][0] && password == users[1][1]){
            return "Login Successful";
        }
        else {
            return "Login Failed"
        }
  }; 
login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("Mark", "123456"); // => "Login Failed"
login("admin", "abc123"); // => "Login Successful"
login("admin", "aaabc123"); // => "Login Failed"
  

//6
const maximumNumber = function (numbers) {
    
    return Math.max(... numbers);
     
}; 
maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6


//7 
const reversString = function (string) {
    return string.split('').reverse().join('');
};
reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"