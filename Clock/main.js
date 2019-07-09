let loop = setInterval(startClock,1000);
let clock = document.querySelector('#clock');

function startClock(){
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  (s <10) ? s = "0"+s : s = s;
  (m <10) ? m = "0"+m : m = m;
  (h <10) ? h = "0"+h : h = h;

  clock.innerHTML = `${h}:${m}:${s}`;
}
