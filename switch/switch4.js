let x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
document.getElementById("demo").innerHTML = text;

// Strict Comparison
/* Switch cases use strict comparison (===).
   A strict comparison can only be true if the
   operands are of the same type.
*/
