window.onload = function(){
   let buttion = document.getElementsByClassName("btn")

   buttion.addEventListener("click", handleSearch)

   const httpRequest = new XMLHttpRequest();
   let url = "http://localhost:8080/superheroes.php";
   httpRequest.onreadystatechange = handleSearch;
   httpRequest.open('GET', url);
   httpRequest.send();

   function handleSearch() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let response = httpRequest.responseText;
        alert(response);
      } 
      else {
        alert('Error with the request.');
      } 
      }
   }

}