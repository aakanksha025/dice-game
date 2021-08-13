var x = 0;
var y = 0;
var sum1 =0;
var sum2 =0;
var count=0;
var addArray1 = new Array();
var addArray2 = new Array();

function add1(){
    for(let i=0; i<5; i++){
        sum1 = sum1 + addArray1[i]; 
    }
}

function add2(){
    for(let i=0; i<5; i++){
        sum2 = sum2 + addArray2[i]; 
    }
}


function rollone(){
    x = x+1;
    if(count%2==0){
        document.getElementById("btnone").disabled = true;
        document.getElementById("btntwo").disabled = false;
    }
    else{
        document.getElementById("btntwo").disabled = false;
        document.getElementById("btnone").disabled = true;
    }
    count++;
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#imgone").setAttribute("src", "images/dice" + randomNumber + ".jpg");
    document.getElementById("p1"+x).textContent=randomNumber;
    var arr1 = x-1;
    addArray1[arr1] = randomNumber; 

    if(addArray1[arr1]>addArray2[arr1]){
        document.getElementById("p1"+x).style.color = "blue";
        document.getElementById("p2"+x).style.color = "red";
    }
    else if(addArray1[arr1]<addArray2[arr1]){
        document.getElementById("p2"+x).style.color = "blue";
        document.getElementById("p1"+x).style.color = "red";
    }

    if(count==10){
        document.getElementById("btnone").disabled = true;
        document.getElementById("btntwo").disabled = true;
        add1();
        add2();
        compare();
    }
}

function rolltwo(){
    y = y+1;
    
    if(count%2!=0){
        document.getElementById("btnone").disabled = false;
        document.getElementById("btntwo").disabled = true;
    }
    else{
        document.getElementById("btntwo").disabled = true;
        document.getElementById("btnone").disabled = false;
    }
    count++;
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#imgtwo").setAttribute("src", "images/dice" + randomNumber + ".jpg");
    document.getElementById("p2"+y).textContent=randomNumber;
    var arr2 = y-1;
    addArray2[arr2] = randomNumber;

    if(addArray1[arr2]>addArray2[arr2]){
        document.getElementById("p1"+y).style.color = "blue";
        document.getElementById("p2"+y).style.color = "red";
    }
    else if(addArray1[arr2]<addArray2[arr2]){
        document.getElementById("p2"+y).style.color = "blue";
        document.getElementById("p1"+y).style.color = "red";
    }
    if(count==10){
        document.getElementById("btnone").disabled = true;
        document.getElementById("btntwo").disabled = true;
        add1();
        add2();
        compare();
    }
}

function compare(){
    if(sum1>sum2){
        var name1 = document.getElementById("name1").value;
        document.getElementById("res").innerHTML += name1 +" WINS!!";
    }
    else if(sum1<sum2){
        var name2 = document.getElementById("name2").value;
        document.getElementById("res").innerHTML += name2 +" WINS!!";
    }
    else{
        document.getElementById("res").innerHTML += "DRAW!!";
    }
}

function namemodal(){
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function displayname1(){
    var name1 = document.getElementById("name1").value;
    document.getElementById('disname1').textContent = name1;
    document.getElementById('player1-name').textContent = name1;
}

function displayname2(){
    var name2 = document.getElementById("name2").value;
    document.getElementById('disname2').textContent = name2;
    document.getElementById('player2-name').textContent = name2;
}