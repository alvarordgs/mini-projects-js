function insert(dig) {
  let screen = document.getElementById("screen-text");
  screen.innerHTML += dig;
}

function reset() {
  document.querySelector("#screen-text").innerHTML = "";
}

function del() {
  let screen = document.getElementById("screen-text").innerHTML;
  if (screen != "") {
    document.getElementById("screen-text").innerHTML = screen.substring(
      0,
      screen.length - 1
    );
  }
}

function result() {
  let screen = document.querySelector("#screen-text").innerHTML;

  if (screen != "") {
    document.querySelector("#screen-text").innerHTML = eval(screen);
  }
}
