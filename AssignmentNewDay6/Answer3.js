var nameEntered = prompt("Enter Your Name");

document.getElementById("name").innerHTML="welocme here, "+nameEntered;

function Cloc(){
    var dat = new Date();
    var tim = dat.toLocaleTimeString();
    ctime.innerHTML=tim;

}

const ctime=document.getElementById("clc")

setInterval(Cloc,1000)

function ToggleMode(){

    document.body.classList.toggle('togglemode');
}