function myFunction() {
//  alert("Hai "+ document.getElementById("lname").value +", "+ document.getElementById("fname").value.toUpperCase());
  document.getElementById("fname").value=document.getElementById("fname").value.toUpperCase();
  document.getElementById("lname").value=document.getElementById("lname").value.toUpperCase();
  document.getElementById("email").value=document.getElementById("email").value.toLowerCase();
  if(document.getElementById("message").value != "")
  {
    document.getElementById("message").value=document.getElementById("message").value + " !!!";
  }
}
