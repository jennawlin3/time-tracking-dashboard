const dailyBtn = document.querySelector("#daily-btn");
const weeklyBtn = document.querySelector("#weekly-btn");
const monthlyBtn = document.querySelector("#monthly-btn");

const activities = document.querySelectorAll(".activity");
const durationInfo = document.querySelectorAll(".duration");
const durationStats = document.querySelectorAll(".stats");
const timeInfo = document.querySelectorAll(".time");

dailyBtn.addEventListener("click", e => {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => showInfo(data));

    function showInfo(data) {

    activities.forEach((activity, index) => {
        durationInfo[index].textContent = data[index].timeframes.daily.current;
        durationStats[index].textContent = data[index].timeframes.daily.previous;
        timeInfo[index].textContent = "Day";
    })
    }
})

weeklyBtn.addEventListener("click", e => {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => showInfo(data));

    function showInfo(data) {

    activities.forEach((activity, index) => {
        durationInfo[index].textContent = data[index].timeframes.weekly.current;
        durationStats[index].textContent = data[index].timeframes.weekly.previous;
        timeInfo[index].textContent = "Week";
    })
    }
})

monthlyBtn.addEventListener("click", e => {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => showInfo(data));

    function showInfo(data) {

    activities.forEach((activity, index) => {
        durationInfo[index].textContent = data[index].timeframes.monthly.current;
        durationStats[index].textContent = data[index].timeframes.monthly.previous;
        timeInfo[index].textContent = "Month";
    })
    }
})