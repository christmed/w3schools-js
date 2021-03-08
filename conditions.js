function myFunction() {
    let greeting;
    let time = new Date().getHours();
    if (time >= 4 && time < 12) {
        greeting = "Good Morning!";
    } else if (time >= 12 && time < 19) {
        greeting = "Good Afternoon!";
    } else if  (time >= 19 || time < 4) {
        greeting = "Good Evening!";
    }
    document.getElementById("demo").innerHTML = greeting;
}