document.write(typeof "word");// to output "string"
document.write("<br>");//to add line spacing 
document.write(typeof 3);//to output "number"

function my_function1() {
    document.getElementById("test") .innerHTML = 0/0;//this results in NaN becuase you cant divide 0/0
}

function my_function2() {
    document.getElementById("test") .innerHTML = isNaN('This is a string');// this would result in true because becuase this is a sting, not a number.
}

function my_function3() {
    document.getElementById("test") .innerHTML = isNaN('007');//this would result in false because 007 is a number 
}

document.write("<br>")
document.write(2E310)//this is infinity
document.write("<br>")
document.write(-2E310)//this is -infinity

function my_function4() {
    document.getElementById("test") .innerHTML = 5E400;//dispaying infinity using a function 
}
function my_function5() {
    document.getElementById("test") .innerHTML = -5E400;//dispaying -infinity using a function 
}

document.write("<br>");
document.write( 10>2);//boolean logic

document.write("<br>");
document.write( 10<2);//boolean logic

console.log(2+2);// to display in console log

document.write("<br>");
document.write("10" + 5);//Type Coercion

console.log(10<2);// to display false in console log

document.write("<br>");
document.write(10 == 10);//comparison with "==" to display true 
document.write("<br>");
document.write(3 == 11);//comparison with "==" to display false

document.write("<br>");//Return true by ensuring to match the data type and value.
x= 10;
y= 10;
document.write(x === y);

document.write("<br>");//Return false by writing a different data type and different value.
a= "red";
b= "yellow";
document.write(a === b);

document.write("<br>");//Return false by writing a different data type but the same value for both.
x= "red";
y= "yellow";
document.write(x === y);

document.write("<br>");//Return false by writing the same data type but a different value for both.
x= "green";
y= "orange";
document.write(x === y);
 

document.write("<br>");//using the & operator 
document.write(5 > 2 && 10 > 4);

document.write("<br>");
document.write(5 > 10 || 10 > 4); //using the or operator

function not_function() {
    document.getElementById("test").innerHTML = !(5 > 10);
}//not operator