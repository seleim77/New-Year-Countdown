const daysEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

setInterval(() => {
    updateCountdown();
}, 1000);


function updateCountdown() {
    const newYearTime = new Date("Jan 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = newYearTime - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour  * 60;
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    daysEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
}