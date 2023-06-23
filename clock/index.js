const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function clock() {
  const now = new Data();

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}
setInterval(clock, 1000); //1초 마다 clock함수를 호출.
