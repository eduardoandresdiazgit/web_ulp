const isOnline = require('is-online');
setInterval(myTimer, 1000);

function myTimer() {
  (async() => {
  	console.log(await isOnline());
    console.log(Date.now());
    aaa=await isOnline();
  //  document.getElementById("putodemierda").innerHTML = date.toLocaleTimeString();
  })();
}
