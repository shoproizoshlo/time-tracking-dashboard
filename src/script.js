const periodRanges = document.querySelectorAll(".period-range");
const lastWeekHours = document.getElementById("last-week-hours");
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
    const selectedPeriod = period.id;
    const jsonData = await fetchData();

    jsonData.forEach((cardData) => {
      const data = cardData.timeframes[selectedPeriod];
      const cardTitle = cardData.title;

      if (cardType.id === cardTitle.toLowerCase()) {
        lastWeekHours.textContent = `${data.current}hrs`;
      }
    });
  });
});
