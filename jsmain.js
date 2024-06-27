let x = parseInt(prompt("enter the number"));
let y = parseInt(prompt("enter the number"));
let z = x+y;
let m = x*y;
let divi = x/y;
let user = prompt("enter any of the following +,*,/");
switch(user)
{
    case "+":
     alert(+z);
     break;
     case "*":
        alert(+m);
        break;
        case "/":
            alert(+divi);
            break;
            default:
                alert("invalid");
}