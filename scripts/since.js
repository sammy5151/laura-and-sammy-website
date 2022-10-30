dayjs.extend(dayjs_plugin_duration);

function togetherSince(element, dateString) {
  const sinceDate = dayjs(dateString);

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(now.diff(sinceDate));


    console.log(duration);

    if (duration.asMilliseconds() <= 0) return;

    element.querySelector(".since__numeric--days").textContent = Math.floor(duration.asDays()).toString().padStart(2, "0");
    element.querySelector(".since__numeric--weeks").textContent = Math.floor(duration.asWeeks()).toString().padStart(2, "0");
    element.querySelector(".since__numeric--months").textContent = duration.asMonths().toFixed(2).toString().padStart(2, "0");
    element.querySelector(".since__numeric--years").textContent = duration.asYears().toFixed(2).toString().padStart(2, "0");

  }, 250);
}



togetherSince(document.querySelector(".since"), "2020-12-31");
