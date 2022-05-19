function darkMode() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    let anchorTag = document.getElementsByTagName("a")
    for (let i = 0; i < anchorTag.length; i++) {
        anchorTag[i].style.color = "white";
      }

}

function brightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    let anchorTag = document.getElementsByTagName("a")
    for (let i = 0; i < anchorTag.length; i++) {
        anchorTag[i].style.color = "black";
      }

}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
