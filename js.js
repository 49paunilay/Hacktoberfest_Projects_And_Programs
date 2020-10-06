/*Aryan Verma*/
var btn1Status = "off";
var btn2Status = "off";

window.onload = function() {
    var t = setInterval(Head, 9000);
    if (c > 0){
        clearInterval(t);
    }
    var body = document.getElementById("body");
    body.innerHTML += "<div id = 'buttons'><button id = 'btn1' class = 'btn' onclick = 'ButtonClick(1)'></button> <button id = 'btn2' class = 'btn' onclick = 'ButtonClick(2)'></button></div>";
    var fan2 = document.getElementById("fan2");
    fan2.innerHTML += "<div style = 'position:absolute;top:30%;left:30%;height:40%;width:40%;border-radius:50%;background:rgba(255, 255, 255, 0);border:2px solid black;z-index:11' id = 'p1'></div><div style = 'position:absolute;top:20%;left:20%;height:60%;width:60%;border-radius:100px;background:rgba(255, 255, 255, 0);border:2px solid black;z-index:11' id = 'p2'></div><div style = 'position:absolute;top:5%;left:5%;height:90%;width:90%;border-radius:100px;background:rgba(255, 255, 255, 0);border:2px solid black;z-index:11' id = 'p3'></div><div style = 'position:absolute;top:-13%;left:-13%;height:120%;width:120%;border-radius:150px;background:rgba(255, 255, 255, 0);border:5px solid black;z-index:11' id = 'p4'></div>";
};

var c = 0;
function Head() {
    c++;
    
}

function ButtonClick(number) {
    var b = document.getElementById("btn"+number);
    var body = document.getElementById("body");
    var table = document.getElementById("table");
    var bulb = document.getElementById("bulb");
    var lamp1 = document.getElementById("lamp1");
    var lamp2 = document.getElementById("lamp2");
    var lamp3 = document.getElementById("lamp3");
    var lamp4 = document.getElementById("lamp4");
    var lamp5 = document.getElementById("lamp5");
    var lamp6 = document.getElementById("lamp6");
    var fan1 = document.getElementById("fan1");
    var fan3 = document.getElementById("fan3");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");
    var b5 = document.getElementById("b5");
    var b7 = document.getElementById("b7");
    var fan4 = document.getElementById("fan4");
    var bookShadow = document.getElementById("bookShadow");
    if (number === 1){
        if (btn1Status === "off"){
            b.style.background = "linear-gradient(0deg, #fff, #ddd)";
            b.style.boxShadow = "1px -2px 3px #444";
            body.style.background = "linear-gradient(275deg, #39a3a1, #6ae6e3)";
            table.style.background = "linear-gradient(290deg, #d45, #c45)";
            bulb.style.background = "#fff";
            lamp1.style.background = "#333";
            lamp2.style.background = "#444";
            lamp3.style.background = "#333";
            lamp2.style.border = "1px solid #444";
            lamp6.style.border = "1px solid #444";
            lamp4.style.border = "1px solid #333";
            lamp5.style.border = "1px solid #333";
            lamp6.style.background = "#444";
            fan1.style.background = "#222";
            fan3.style.background = "#222";
            p1.style.border = "2px solid #222";
            p2.style.border = "2px solid #222";
            p3.style.border = "2px solid #222";
            p4.style.border = "5px solid #222";
            b2.style.background = "#555";
            b3.style.background = "linear-gradient(180deg, #eee, #ccc)";
            b4.style.background = "#424242";
            b5.style.background = "linear-gradient(180deg, #ddd, #bbb)";
            b7.style.background = "linear-gradient(180deg, #ddd, #bbb)";
            fan4.style.display = "block";
            bookShadow.style.display = "block";
            btn1Status = "on";
        }
        else {
            b.style.background = "linear-gradient(180deg, #fff, #ddd)";
            b.style.boxShadow = "1px 2px 3px #444";
            body.style.background = "#39a3a1";
            table.style.background = "#b23";
            bulb.style.background = "#cfcfcf";
            lamp1.style.background = "#111";
            lamp2.style.background = "#222";
            lamp3.style.background = "#111";
            lamp6.style.background = "#222";
            lamp4.style.border = "1px solid black";
            lamp5.style.border = "1px solid black";
            lamp5.style.borderTop = "none";
            lamp2.style.border = "1px solid black";
            lamp2.style.borderTop = "none";
            lamp6.style.border = "1px solid black";
            fan1.style.background = "#000";
            fan3.style.background = "#000";
            p1.style.border = "2px solid #000";
            p2.style.border = "2px solid #000";
            p3.style.border = "2px solid #000";
            p4.style.border = "5px solid #000";
            b2.style.background = "#444";
            b3.style.background = "#a0a0a0";
            b4.style.background = "#444";
            b5.style.background = "#a0a0a0";
            b7.style.background = "#a0a0a0";
            fan4.style.display = "none";
            bookShadow.style.display = "none";
            btn1Status = "off";
        }
    }
    else {
        if (btn2Status === "off"){
            b.style.background = "linear-gradient(0deg, #fff, #ddd)";
            b.style.boxShadow = "1px -2px 3px #444";
            btn2Status = "on";
        }
        else {
            b.style.background = "linear-gradient(180deg, #fff, #ddd)";
            b.style.boxShadow = "1px 2px 3px #444";
            btn2Status = "off";
        }
        ForFan(btn2Status);
    }
}

function ForFan(value) {
    var fan = document.getElementById("spin");
    if (value === "on"){
        fan.style.animation = "MyFan linear 0.4s infinite";
    }
    else {
        fan.style.animation = "none";
        fan.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    }
}
