let tm;
let getTime;
let getDate;

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  let tm = new Date();

  getTime =
    tm.getHours() + "h : " + tm.getMinutes() + "m : " + tm.getSeconds() + "s";
  getDate = tm.toLocaleDateString(undefined, options);

  document.getElementById("time").innerHTML = getTime + " <br>On " + getDate;
}, 1000);
