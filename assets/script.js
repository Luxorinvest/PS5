document.addEventListener("DOMContentLoaded", function() {
  var consentOverlay = document.getElementById("consentOverlay");
  var consentButton = document.getElementById("consentButton");

  consentButton.addEventListener("click", function() {
    consentOverlay.style.display = "none";
  });
});
