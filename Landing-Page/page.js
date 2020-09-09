document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fname").addEventListener("keyup", function (event) {
    document.title = event.target.value;
  });
});

// Navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
