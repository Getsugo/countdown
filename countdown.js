var x;

function yo() {
  var dateInput = document.getElementById("date").value;
  var deadline = new Date(dateInput).getTime();
  var today = new Date().getTime();

  if (dateInput == "") {
    alert("Veuillez choisir une date");
    return;
  } else if (today > deadline) {
    alert("Veuillez choisir une date future");
    return;
  } else {
    document.getElementById("end-date").innerHTML =
      "Date de fin : " + dateInput;
    x = setInterval(function () {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = "TEMPS EN ÉCOULEMENT";
      document.getElementById("day").innerHTML = days;
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
      if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TEMPS ÉCOULÉ";
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("minute").innerHTML = "0";
        document.getElementById("second").innerHTML = "0";
      }
      if (t != 0) {
        document.getElementById("date").disabled = true;
        document.getElementById("btn").disabled = true;
      }
    }, 1000);
  }
}

function stop() {
  clearInterval(x);
  document.getElementById("date").disabled = false;
  document.getElementById("btn").disabled = false;
  document.getElementById("date").value = "";
  document.getElementById("day").innerHTML = "0";
  document.getElementById("hour").innerHTML = "0";
  document.getElementById("minute").innerHTML = "0";
  document.getElementById("second").innerHTML = "0";
}
