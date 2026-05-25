console.log("Hello from JS");

var users = [
    {"name" : "John Doe", "gender" : "Male", "img" : "img/john.png"},
    {"name" : "Jane Doe", "gender" : "Female", "img" : "img/jane.png"}
];

var currentUserIndex = 0;

function toggleCard(){
   currentUserIndex = (currentUserIndex + 1) % users.length;
    var user = users[currentUserIndex];

    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = "<b>" + user.name + "</b>";
}