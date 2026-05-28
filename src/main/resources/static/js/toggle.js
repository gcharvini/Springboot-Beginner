var currentUserIndex=1;

var userArray=[
    {"name":"John Dae","gender":"male","image":"img/john.png"},
    {"name":"Jane Dae","gender":"female","image":"img/jane.png"}
];

function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser= userArray[currentUserIndex];
    displayUser(nextUser);
}

function displayUser(user){
    document.getElementById("userImage").src= user.image;
    document.getElementById("userName").textContent=user.name;
    document.getElementById("userGender").textContent=user.gender;

}