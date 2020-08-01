countHour = 0

countMin = 0

countSec = 0

i=0

var pause = false

function pad(n) {
    return (n < 10 ? "0" + n : n);
}

function clockStart() {

    if ( pause == false ) {
        
            countSec = i+1

            if (i==59) {

                i = -1

                countSec=0

                countMin+=1

                if (countMin>=60){
                    
                    countHour+=1
                    
                    countMin=0
            
                }
            }


            document.getElementById("sw").innerHTML=pad(countHour)+":"+pad(countMin)+":"+pad(countSec);

            i=i+1

        
    }
    
    
}

var trp

function programStarter(){

    var pause = false

   trp= setInterval(clockStart,1000)

    
}

function ClockPause(){

    if ( pause == true){
        
        clearInterval(trp)
        
        pause= false

    }
    else{  

        trp = setInterval(clockStart,1000)

        pause = true
   }
    
}

function ClockReset(){

    clearInterval(trp)

    countHour = 0

    countMin = 0

    countSec = 0

    i=0

    pause = true

    document.getElementById("sw").innerHTML="00:00:00";
    

}

var timer;

document.getElementById("m").value=0

document.getElementById("h").value=0

document.getElementById("s").value=0

function set(){

    document.getElementById('out1').innerHTML=''

    let da= new Date()

    da.setHours(document.getElementById("h").value)

    da.setMinutes(document.getElementById("m").value)

    da.setSeconds(document.getElementById("s").value)

    timer=setInterval(setTimer,1000)
}

function setTimer(){

    if(document.getElementById("s").value==0)
    {
        if(document.getElementById("m").value>0)
        {
            document.getElementById("m").value-=1

            document.getElementById("s").value=59
        }
        else
        {
            if(document.getElementById("h").value>0)
            {
                document.getElementById("m").value=59

                document.getElementById("s").value=59

                document.getElementById("h").value-=1
            }
            else
            {
                clearInterval(timer)

                alert("Timer stopped / Set new values")
            }
        }
    }
    else
    document.getElementById("s").value-=1

    da.setSeconds(document.getElementById("s").value);

}

function resetTimer(){

    document.getElementById("m").value=0

    document.getElementById("h").value=0

    document.getElementById("s").value=0
    
    clearInterval(timer)

}