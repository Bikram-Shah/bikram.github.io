function Clock() {
  var a = "";
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mili = date.getMilliseconds();

  if (hours > 12) {
    a = "pm";
  } else {
    a = "am";
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  document.getElementById("clock").innerHTML =
    hours + ":" + min + ":" + sec + " " + a;
}
