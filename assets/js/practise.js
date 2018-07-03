var myoperate = (function(a,b){
  if (a>b) {
    return a;
  }else {
    return b;
  }
})(4,5)

document.getElementById("prac-1").innerHTML= "<p> Bigger Number is: " + myoperate + "</p>";

console.log(myoperate);
var x = document.querySelector("em");
x.innerHTML="<p onclick= myFunction()>JavaScript (click me)</p>";
function myFunction() {
    x.innerHTML = "YOU CLICKED ME!";
}
