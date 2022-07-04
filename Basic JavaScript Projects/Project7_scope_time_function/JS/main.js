var x = 10;//global variable
function Add_numbers_1() {
    document.write(20 + x + "<br>")
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {//local variable
var x = 10;
    document.write(20 + x + "<br>")
}
function Add_numbers_4() {
    document.write(x + 100);
    }
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {//using console log to debug 
    var x = 10;
        console.log(15 + x)
    }
    function Add_numbers_6() {
        console.log(x + 100);
    }
    Add_numbers_5();
    Add_numbers_6();

function get_date(){//if statement 
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = " how are you today?";
    }
}
function and(){// my if statement 
    if (1 < 18) {
    document.getElementById("and").innerHTML = " how are you today?";
    }
}

function Age_function() {// my else, if, statement 
Age = document.getElementById("Age").value;
if (Age >= 18) {
    Vote = "you are old enough to vote!";
}
else {
    Vote = "you are not old enough to vote!";
}
document.getElementById("how_old_are_you?").innerHTML = Vote;
}