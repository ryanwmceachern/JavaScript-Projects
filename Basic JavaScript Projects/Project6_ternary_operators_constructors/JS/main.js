function Ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"you are tall enough";//ternary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_function() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "you are too young":"you are old enough";//ternary operator
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;// using "this key word"
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("doge", "viper", 2020, "red");//using "new" keyword
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle("ford", "pinto", 1971, "mustard");
function key() {//setting function to operate keywords
    document.getElementById("new_and_this").innerHTML =
    "erik drive a " + erik.vehicle_color + "-colored " + erik.vehicle_model +
    " manufactured in " + erik.vehicle_year;
}

function count_function() {//nested function
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point= 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}
