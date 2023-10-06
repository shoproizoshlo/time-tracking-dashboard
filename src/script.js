const periodRanges = document.querySelectorAll(".period-range");
const lastWeekHours = document.getElementById("last-week-hours");
const currentWeekHours = document.getElementById("current-week-hours");
const lastPeriod = document.getElementById("last-period");
const cardType = document.getElementById("work"); // Update with appropriate card identifier

const fetchData = async () => {
  try {
    const response = await fetch("./src/data.json"); // Adjust the path accordingly
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

periodRanges.forEach((period) => {
  period.addEventListener("click", async () => {
    // Remove the "active" class from all elements
    periodRanges.forEach((element) => {
      element.classList.remove("active");
    });

    const selectedPeriod = period.id;

    //   change name of the period
    if (selectedPeriod === "daily") {
      lastPeriod.textContent = `Day`;
    } else if (selectedPeriod === "weekly") {
      lastPeriod.textContent = `Week`;
    }
    if (selectedPeriod === "monthly") {
      lastPeriod.textContent = `Month`;
    }

    const jsonData = await fetchData();
    //   change data hours base in JSON file

    jsonData.forEach((cardData) => {
      const data = cardData.timeframes[selectedPeriod];
      const cardTitle = cardData.title;
      if (cardType.id === cardTitle.toLowerCase()) {
        currentWeekHours.textContent = `${data.current}hrs`;
        lastWeekHours.textContent = `${data.previous}hrs`;
      }
    });

    // Add the "active" class to the clicked element
    period.classList.add("active");
  });
});

periodRanges.forEach((period) => {
  period.addEventListener("click", () => {});
});
