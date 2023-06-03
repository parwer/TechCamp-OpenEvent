let now = new Date();
const result = now.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

document.getElementById("date").textContent = result;
// Update the time every second
setInterval(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // Add leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").textContent = timeString;
}, 1000);