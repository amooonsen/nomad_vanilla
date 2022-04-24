const clockArea = document.querySelector('.clock');

const checkTime = () => {
    const getTime = new Date()
    const hours = String(getTime.getHours())
    const minutes = String(getTime.getMinutes())
    const seconds = String(getTime.getSeconds())

    clockArea.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
}
checkTime()
setInterval(checkTime, 1000);

