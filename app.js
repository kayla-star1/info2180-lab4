window.onload = function(){
    
  document.getElementById("btn").addEventListener("click", function(){

    let searchbox = document.getElementById("myInput");
    let result = document.getElementById("result");
    
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         result.innerHTML= this.response;
       }
      }

    xhttp.open("GET", "superheroes.php?input="+searchbox.value);
    xhttp.send();

  })
}
