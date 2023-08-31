function togglePopup(event) {
  // Prevent the click event from propagating further
  event.stopPropagation();

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

  var shareButton = document.getElementById("shareButton");
  shareButton.classList.toggle("active-button");
}

document.body.addEventListener("click", function (event) {
  var popup = document.getElementById("myPopup");
  var shareButton = document.getElementById("shareButton");

  if (event.target !== shareButton && !popup.contains(event.target)) {
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
      shareButton.classList.remove("active-button");
    }
  }
});
