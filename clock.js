var countDownDate = new Date("aug 30, 2023 15:37:25").getTime();
// var countDownDate = new Date(offer()).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;



    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";
    days = days < 10 ? `0${days}` : days ;
    hours = hours < 10 ? `0${hours}` : hours ;
    mins = mins < 10 ? `0${mins}` : mins ;
    secs = secs < 10 ? `0${secs}` : secs ;


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = secs;

    

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);