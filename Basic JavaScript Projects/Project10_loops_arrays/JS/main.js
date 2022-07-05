function count_to_ten() {//sets while loop that counts to ten.
    var Digit = "";
    var x = 1;
    while(x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

function find_the_length() {//finds the legnth of "hello world!"
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("demo").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];// creating a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_of_Instruments").innerHTML = Content;
}

function cat_pics(){//creating an array with objects
    var cat_picture = [];
    cat_picture[1] = "sleeping";
    cat_picture[2] = "playing";
    cat_picture[3] = "eating";
    cat_picture[4] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + 
        cat_picture[2] + ".";
}

function constant_function() {//using the const keyword
    const musical_instrument = {type:"guitar", brand:"fender", color:"black"};
    musical_instrument.color = "blue";
    musical_instrument.price = "900$";
    document.getElementById("constant").innerHTML = "The cost of the " +
        musical_instrument.type + " was " + musical_instrument.price;
}

document.write("<br>")
var x = 82;//using the let keyword
document.write(x);
{
    let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x);

let car = {//creating an object with properties and a method
    make:"Dodge ",
    model:"viper ",
    year:"2021 ",
    color: "red ", 
    description : function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
        }
};
document.getElementById("car_object").innerHTML = car.description();