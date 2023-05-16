window.addEventListener("resize", function () {
  if (window.innerHeight < 540) {
    location.href =
      "https://cataas.com/cat/says/YOU%20HAVE%20BEEN%20CURSED%20BY%20THE%20MIGHTY%20CARD";
    openPopup();
  }
});

function openPopup() {
  window.open("https://cataas.com/cat/gif", "_blank", "width=600,height=400");
}
