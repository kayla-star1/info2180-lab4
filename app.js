window.onload = function(){
  
  document.getElementById("btn").onclick= function(){handleButton()};
  function handleButton() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       alert(this.responseText);
     }
   };
   xhttp.open("GET", "superheroes.php");
   xhttp.send();

 }
}
