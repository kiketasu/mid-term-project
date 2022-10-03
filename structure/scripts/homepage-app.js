
function myFunction() {
    let x = document.getElementsByClassName("navbar-brand");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }