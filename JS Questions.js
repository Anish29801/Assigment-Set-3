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

// 