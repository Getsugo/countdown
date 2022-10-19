function yo() {
  var dateInput = document.getElementById("date").value;
  var deadline = new Date(dateInput).getTime();
  var today = new Date().getTime();

  if (dateInput == "") {
    alert("Please choose a date");
    return;
  } else if (today > deadline) {
    alert("Please choose a future date");
    return;
  } else {
    document.getElementById("az").innerHTML = "end date : " + dateInput;
    var x = setInterval(function () {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      document.getElementById("day").innerHTML = days;
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
      if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
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
