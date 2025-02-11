function openDrawerMenu() {
  var x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " open";
  } else {
    x.className = "nav";
  }
}