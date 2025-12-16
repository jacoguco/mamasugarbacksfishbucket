function instructionsRed() {
  document.getElementById("demo").style.color = "red";
}

function changeRating(val) {
  alert("You rated this recipe a: " + val);
}

function theme() {
  let choice = document.getElementById("mySelect").value;

  if (choice ==="dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }

  if (choice ==="light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

}
