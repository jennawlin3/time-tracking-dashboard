import data from "../data.json" assert{type: 'json'};

const d = document;

// Buttons
const weeklyBtn = d.querySelector("#weekly-btn");
const dailyBtn = d.querySelector("#daily-btn");
const monthlyBtn = d.querySelector("#monthly-btn");

// Cards
const activities = d.querySelector(".activities")

weeklyBtn.addEventListener("click", (e) => {
    activities.innerHTML = "";

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    if(e.target) {
        data.forEach(d => {
            let dataActivity = d.title.toLowerCase();
            
            if(dataActivity === "self care") {
                dataActivity = "self-care";
            }


            const activity = document.createElement("div");
            activity.setAttribute("id", `${dataActivity}`);
            activity.classList.add("activity");
            const activityInfo = document.createElement("div");
            activityInfo.setAttribute("id", `${dataActivity}-container`);
            activityInfo.classList.add("activity-info");
            const activityDurationContainer = document.createElement("div");
            activityDurationContainer.classList.add("activity-duration");
            const titleActivity = document.createElement("h3");
            titleActivity.textContent = `${d.title}`;
            const activityDuration = document.createElement("h2");
            activityDuration.setAttribute("id", `${dataActivity}-duration`);
            activityDuration.classList.add("duration");
            activityDuration.textContent = `${d.timeframes.weekly.current}hrs`;
            const activityOptions = document.createElement("div");
            activityOptions.classList.add("activity-options");
            const optionsBtn = document.createElement("a");
            optionsBtn.setAttribute("href", "#");
            const optionBtnIcon = document.createElement("img");
            optionBtnIcon.setAttribute("src", `./images/icon-ellipsis.svg`);
            const activityStats = document.createElement("p");
            activityStats.setAttribute("id", `${dataActivity}-stats`);
            activityStats.classList.add("stats");
            activityStats.textContent = `Last week - ${d.timeframes.weekly.previous}hrs`;

            optionsBtn.appendChild(optionBtnIcon);
            activityOptions.appendChild(optionsBtn);
            activityOptions.appendChild(activityStats);
            activityDurationContainer.appendChild(titleActivity);
            activityDurationContainer.appendChild(activityDuration);
            activityInfo.appendChild(activityDurationContainer);
            activityInfo.appendChild(activityOptions);
            activity.appendChild(activityInfo);
            activities.appendChild(activity);
        })
        
    }
})

dailyBtn.addEventListener("click", (e) => {
    activities.innerHTML = "";
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");

    if(e.target) {
        data.forEach(d => {
            let dataActivity = d.title.toLowerCase();
            
            if(dataActivity === "self care") {
                dataActivity = "self-care";
            }

            const activity = document.createElement("div");
            activity.setAttribute("id", `${dataActivity}`);
            activity.classList.add("activity");
            const activityInfo = document.createElement("div");
            activityInfo.setAttribute("id", `${dataActivity}-container`);
            activityInfo.classList.add("activity-info");
            const activityDurationContainer = document.createElement("div");
            activityDurationContainer.classList.add("activity-duration");
            const titleActivity = document.createElement("h3");
            titleActivity.textContent = `${d.title}`;
            const activityDuration = document.createElement("h2");
            activityDuration.setAttribute("id", `${dataActivity}-duration`);
            activityDuration.classList.add("duration");
            activityDuration.textContent = `${d.timeframes.daily.current}hrs`;
            const activityOptions = document.createElement("div");
            activityOptions.classList.add("activity-options");
            const optionsBtn = document.createElement("a");
            optionsBtn.setAttribute("href", "#");
            const optionBtnIcon = document.createElement("img");
            optionBtnIcon.setAttribute("src", `./images/icon-ellipsis.svg`);
            const activityStats = document.createElement("p");
            activityStats.setAttribute("id", `${dataActivity}-stats`);
            activityStats.classList.add("stats");
            activityStats.textContent = `Last week - ${d.timeframes.daily.previous}hrs`;

            optionsBtn.appendChild(optionBtnIcon);
            activityOptions.appendChild(optionsBtn);
            activityOptions.appendChild(activityStats);
            activityDurationContainer.appendChild(titleActivity);
            activityDurationContainer.appendChild(activityDuration);
            activityInfo.appendChild(activityDurationContainer);
            activityInfo.appendChild(activityOptions);
            activity.appendChild(activityInfo);
            activities.appendChild(activity);
        })
        
    }
})


monthlyBtn.addEventListener("click", (e) => {
    activities.innerHTML = "";

    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");

    if(e.target) {
        data.forEach(d => {
            let dataActivity = d.title.toLowerCase();
            
            if(dataActivity === "self care") {
                dataActivity = "self-care";
            }

            const activity = document.createElement("div");
            activity.setAttribute("id", `${dataActivity}`);
            activity.classList.add("activity");
            const activityInfo = document.createElement("div");
            activityInfo.setAttribute("id", `${dataActivity}-container`);
            activityInfo.classList.add("activity-info");
            const activityDurationContainer = document.createElement("div");
            activityDurationContainer.classList.add("activity-duration");
            const titleActivity = document.createElement("h3");
            titleActivity.textContent = `${d.title}`;
            const activityDuration = document.createElement("h2");
            activityDuration.setAttribute("id", `${dataActivity}-duration`);
            activityDuration.classList.add("duration");
            activityDuration.textContent = `${d.timeframes.monthly.current}hrs`;
            const activityOptions = document.createElement("div");
            activityOptions.classList.add("activity-options");
            const optionsBtn = document.createElement("a");
            optionsBtn.setAttribute("href", "#");
            const optionBtnIcon = document.createElement("img");
            optionBtnIcon.setAttribute("src", `./images/icon-ellipsis.svg`);
            const activityStats = document.createElement("p");
            activityStats.setAttribute("id", `${dataActivity}-stats`);
            activityStats.classList.add("stats");
            activityStats.textContent = `Last week - ${d.timeframes.monthly.previous}hrs`;

            optionsBtn.appendChild(optionBtnIcon);
            activityOptions.appendChild(optionsBtn);
            activityOptions.appendChild(activityStats);
            activityDurationContainer.appendChild(titleActivity);
            activityDurationContainer.appendChild(activityDuration);
            activityInfo.appendChild(activityDurationContainer);
            activityInfo.appendChild(activityOptions);
            activity.appendChild(activityInfo);
            activities.appendChild(activity);
        })
        
    }
})
