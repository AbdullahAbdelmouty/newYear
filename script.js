const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const scoundsEl = document.getElementById("scounds");
const newYear = '1 Jan 2023';

function countdwon(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSecound = (newYearDate - currentDate)/1000;
    const scounds = Math.floor(totalSecound)%60;
    const mins = Math.floor(totalSecound/60)%60;
    const hours = Math.floor(totalSecound/3600)%24;
    const days = Math.floor(totalSecound/3600/24)
    console.log(days,hours,mins,scounds);
daysEl.innerHTML = formatTime(days);
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
scoundsEl.innerHTML = formatTime(scounds);
};
function formatTime(time){
    return time < 10? `0${time}` : time;
}
countdwon();
setInterval(countdwon,1000);
