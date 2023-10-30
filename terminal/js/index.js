function checkInput() {
    var input = document.getElementById("typer").value.toLowerCase();
    
    switch (input) {
      case "help":
        window.location.href = "index.html"; 
        break;
      case "social":
        window.location.href = "https://srab.carrd.co"; 
        break;
      // Add more cases as needed
      default:
        // No match found, do something else or show an error message
        break;
    }
  }