// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
let string_var = 'JS Developer'
let boolean_var = true
let undefined_var = undefined
let null_var = null;

console.log(`string_var : ${string_var}`);
console.log(`boolean_var : ${boolean_var}`);
console.log(`undefined_var : ${undefined_var}`);
console.log(`null_var : ${null_var}`);

// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
let first_name = 'Anish'
let last_name = 'Agrawal'
let status = 'Single'
let country = 'India'
let age = 21

console.log(`First Name : ${first_name}`);
console.log(`Last Name : ${last_name}`);
console.log(`Status : ${status}`);
console.log(`Country : ${country}`);
console.log(`Age : ${age}`);

// 3. Decalre a variable and assign value to it and change all the string characters to capital letters using toUpperCase() method.
let Name = 'JS Developer'
console.log(Name);
Name = Name.toUpperCase();
console.log(Name);

// 4. Check if the string contains a word Script using includes() method.
console.log(Name.includes("JS"));

// 5. Split the string into an array using split() method
Name = Name.toLowerCase();
console.log(Name.split(""));

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let company_Arr = companies.split(",")
console.log(company_Arr);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
console.log(Name.lastIndexOf('e'));

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
sentence = sentence.trim();
console.log(sentence); 

/* 
10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.

*/
// truthy
if(3=='3'){
    if(3<6){
        if(!false){
            console.log('Truthy');
        }
    }
}

// falsey
if(3!=3){
    if(3>6){
        if(!true){
            console.log('Falsey');
        }
    }
}

// 11. Compare expressions

console.log( 4 > 3 ); // - true
console.log (4 >= 3) // - true
console.log( 4 < 3) // - false
console.log(4 <= 3) // - false
console.log( 4 == 4) // - true
console.log( 4 === 4) // -true
console.log( 4 != 4) // - false
console.log(  4 !== 4) // - false
console.log(  4 != '4') // -false
console.log( 4 == '4') // - true
console.log( 4 === '4') // - false

if('python'.length != 'jargon'.length){
    console.log("Same Length");
}

/* 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const d = new Date();
const today = d.now;
const given_date = new Date(1970,0,1,0,0,0,0);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
const dif = d.getTime() - given_date.getTime();
const Seconds_Between_Dates = Math.round(Math.abs(dif / 1000))
console.log(Seconds_Between_Dates);

// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const height = prompt("Enter a height");
const base = prompt("Enter a base");
const area = 0.5 * height * base;

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const corrd1 = [2,2]
const corrd2 = [6,10]
const slope = (corrd2[1] - corrd1[1])/(corrd2[0] - corrd1[0])

// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
const eqn = ` y = 2x -2`.split("");
console.log(eqn);
let m;
let x_intercept;
let y_intercept;
for(let i =0;i<eqn.length;i++){
    if(eqn[i+1] == 'y'){
        m = eqn[i]
    }
}

// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const r = prompt("Enter a reduis");
const pi = 3.142;
const area_of_circle = pi * r * r;
const circumference  = pi * r * 2;

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const your_age = prompt("Enter your age:")
if(your_age >= 18){
    console.log('You are old enough to drive');
}
else{
    console.log('You are not old enough to drive');
}

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const num = prompt("Enter a number:");
if(num%2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd"); 
}

/* 
20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/
const marks = prompt("Enter marks");
let grade = '';

if(marks >= 80 && marks <=100){
    grade = 'A'
}
else if(marks >= 70 && marks <=89){
    grade = 'B'
}
else if(marks >= 60 && marks <=69){
    grade = 'C'
}
if(marks >= 50 && marks <=59){
    grade = 'D'
}
else{
    grade = 'F'
}
console.log(grade);

// 21. Season Caculator
const seasons = ['Autumn', 'Winter', 'Spring' ,'Summer'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const user_input = prompt("Enter a month");
if(user_input == seasons[8] || user_input == seasons[9] || user_input == seasons[10]){
    console.log(seasons[0]);
}
else if(user_input == seasons[11] || user_input == seasons[0] || user_input == seasons[1]){
    console.log(seasons[1]);
}
else if(user_input == seasons[2] || user_input == seasons[3] || user_input == seasons[4]){
    console.log(seasons[2]);
}
else{
    console.log(seasons[3]);
}

// 22. Write a program which tells the number of days in a month.

let No_of_Days = 0;
const Entered_month = prompt('Enter a month')
if(Entered_month ==months[1]){
    No_of_Days = 28;
}
else if(Entered_month)
else{
    No_of_Days=30
}