//CHAPTER # 05
//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser?

var num1 = 3;
var num2 = 5;
let add = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${add} </br>`);

//----------------------------------------------------------------------------------------------------------------------------------------

document.write(`<h2>Arthematic Operator:</h2>`)

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

//Subtraction:
let subtract = num1 - num2;
document.write(`</br>Subtraction of ${num1} and ${num2} is ${subtract}  </br>`);

//multiplication:
let multiplication = num1 * num2;
document.write(`multiplication of ${num1} and ${num2} is ${multiplication} </br>`);

//Division:
let division = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${division}</br>`);

//modulus:
let modulus = num1 % num2;
document.write(`modulus of ${num1} and ${num2} is ${modulus} </br>`);


//------------------------------------------------------------------------------------------------------------------

document.write(`<h2>Increament & Decreament:</h2>`);


//3. Do the following using JS Mathematic Expressions

//a. Declare a variable.

var value = "undefined";
document.write(`Value after variable declaration is ${value}</br> `);

//b. Show the value of variable in your browser like “Value
//after variable declaration is: ??”.

//c. Initialize the variable with some number.

//d. Show the value of variable in your browser like “Initial
//value: 5”.


var value = 5;
document.write(`initial value is ${5}</br>`);

//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 6”.

value ++;
document.write(`value after increament is ${value}</br>`);


//g. Add 7 to the variable

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.


value += 7;
document.write(`value after addition ${value}</br>`);

//i. Decrement the variable.

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

value -=1;
document.write(`value after decreament is ${value}</br>`);

//k. Show the remainder after dividing the variable’s value
//by 3.
//l. Output : “The remainder is : 0”

var num3 = 9;
reminder =num3 % 3;
document.write(`The reminder is : ${reminder}`);


//------------------------------------------------------------------------------------------------------------------------------------

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

cost = 5;
ticketCost = 600;
multiplication = cost * ticketCost;
document.write(`</br> Total cost to buy <b>${cost}</b> tickets to a movie is <b>${multiplication}</b>PKR`);

//--------------------------------------------------------------------------------------------------------------------------------

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

document.write(`<h2>Table of # 4: </h2>`);
 var numbers = 4;
 var Table =(`Write a number to print numbers.`);
 document.write(`Table Of ${numbers} <br/>`);
 document.write(`${numbers} X 1 = ${numbers *1} <br/>`);
 document.write(`${numbers} X 2 = ${numbers *2} <br/>`);
 document.write(`${numbers} X 3 = ${numbers *3} <br/>`);
 document.write(`${numbers} X 4 = ${numbers *4} <br/>`);
 document.write(`${numbers} X 5 = ${numbers *5} <br/>`);
 document.write(`${numbers} X 6 = ${numbers *6} <br/>`);
 document.write(`${numbers} X 7 = ${numbers *7} <br/>`);
 document.write(`${numbers} X 8 = ${numbers *8}  <br/>`);
 document.write(`${numbers} X 9 = ${numbers *9}  <br/>`);
 document.write(`${numbers} X 10 = ${numbers *10} <br/>`);


//-----------------------------------------------------------------------------------------------------------------------------------

//Question 6:

// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


document.write(`<h2>Temperature Calculation:</h2>`);
var  cT = 25;
var fT = 70;

var fT = cT * ( 9 / 5) + 32;
document.write(`${cT}<sup>0</sup>C is  ${fT}<sup>0</sup>F <br/>`);

var new_Ct = (70 - 32)  * 5 / 9;
document.write(`${fT} <sup/>0</sup>F is ${new_Ct}<sup>0</sup>C </br> `);


//-----------------------------------------------------------------------------------------------------------------------------------------


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

document.write(`<h2>Shopping Cart:</h2>`);
var priceOfItem_1 = 650;
var quantityItem_1 = 3;
var priceOfItem_2 = 100;
var quantityItem_2 = 7;
var ShippingCharges = 100;

var totalCost = (650 * 3) + (100 * 7) + 100;

document.write(`Price of item 1 is ${priceOfItem_1} <br/>`);
document.write(`Quantity of item 1 is ${quantityItem_1} <br/>`);
document.write(`Price of item 2 is ${priceOfItem_2} <br/>`);
document.write(`Quantity of item 1 is ${quantityItem_2} <br/>`);
document.write(`Shipping charges ${ShippingCharges}<br/><br/>`);
document.write(`Total cost of your order is ${totalCost}`);


//-------------------------------------------------------------------------------------------------------------------------------------

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write(`<h2>Mark Sheet:</h2>`);
var totalMarks = 980;
var marksObtained = 804;
var percentage = (804 / 980) * 100; 
document.write(`Total marks: ${totalMarks} <br/>`);
document.write(`Marks obtained: ${marksObtained} <br/>`);
document.write(`Percentage : ${percentage}%<br/>`);

//-------------------------------------------------------------------------------------------------------------------------------


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write(`<h2>Currency in PKR:</h2>`);

var us_Dollar = 104.80;
var saudi_Riyal = 28; 
var totalCurrency = (us_Dollar * 10) + (saudi_Riyal * 25);

document.write(`Total currency in PKR : <b>${totalCurrency}</b> <br/>`);

//-------------------------------------------------------------------------------------------------------------

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write(`<h2>Arithmetic Calculation:</h2>`);
var newNumber = 4;
var result = (( newNumber + 5) * 10 / 2 );
document.write(`Result is ${result} <br/>`);


//-----------------------------------------------------------------------------------------------------------------
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write(`<h2>Age Calulator:</h2>`);

var currentYear = 2016;
var birthYear = 1992;
var $age = (2016 - 1992);

document.write(`Current year: ${currentYear}<br/>`);
document.write(`Birth year: ${birthYear}<br/>`);
document.write(`Your Age is ${$age}<br/>`);

//-------------------------------------------------------------------------------------------------------------------
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write(`<h2>The Geometrizer:</h2>`);

var radius = 20;
var pie = 3.142;
var circumference = (2 * pie * radius);
var area = (pie * radius*2)

document.write(`Radius of a circle: ${radius} <br/>`);
document.write(`The circumference is: ${circumference} <br/>`);
document.write(`The area is: ${area} <br/>`);



//------------------------------------------------------------------------------------------------------------------

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write(`<h2> The Lifetime Supply Calculator:</h2>`);
var fvrt_Snack = "chocolate chip";
var current_Age = 15;
var maximum_Age = 65;
var snack_PerDay = 3;
var total_Chocolate = (50 * 3);
document.write(`Favourite snak: ${fvrt_Snack}<br/>`);
document.write(`Current age: ${current_Age}<br/>`);
document.write(`Maximum age: ${maximum_Age}<br/>`);
document.write(`Amount of snacks per day: ${snack_PerDay}<br/>`);
document.write(`You will need ${total_Chocolate} chocolate chip to last you untill the ripe olg age of ${maximum_Age} <br/>`);

//---------------------------------------------------------------------------------------------------------------------------------------