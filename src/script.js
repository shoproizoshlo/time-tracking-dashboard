const periodRanges = document.querySelectorAll(".period-range");
const lastWeekHours = document.querySelectorAll(".last-week-hours");
const currentWeekHours = document.querySelectorAll(".hrs");
const cardTypes = document.querySelectorAll(".card-type");
const lastPeriod = document.querySelectorAll(".last-period");

const fetchData = async () => {
  try {
    const response = await fetch("./src/data.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const updateCardData = async (selectedPeriod, cardId) => {
  const jsonData = await fetchData();

  jsonData.forEach((cardData, index) => {
    if (cardTypes[index].id === cardId) {
      const data = cardData.timeframes[selectedPeriod];
      currentWeekHours[index].textContent = `${data.current}hrs`;
      lastWeekHours[index].textContent = `${data.previous}hrs`;
    }
  });
};

periodRanges.forEach((period) => {
  //   updateCardData(period.id, "work");
  period.addEventListener("click", async () => {
    //   Remove the "active" class from all elements
    periodRanges.forEach((element) => {
      element.classList.remove("active");
    });
    // Add the "active" class to the clicked element
    period.classList.add("active");
    const selectedPeriod = period.id;

    //   change name of the period
    lastPeriod.forEach((period) => {
      if (selectedPeriod === "daily") {
        period.textContent = `Day`;
      } else if (selectedPeriod === "weekly") {
        period.textContent = `Week`;
      } else if (selectedPeriod === "monthly") {
        period.textContent = `Month`;
      }
    });

    cardTypes.forEach((card) => {
      const cardId = card.id;
      updateCardData(selectedPeriod, cardId);
    });
  });
});

const initPage = () => {
  // Add the "active" class to the clicked element
  const selectedPeriod = periodRanges[1];
  selectedPeriod.classList.add("active");

  cardTypes.forEach((card) => {
    const cardId = card.id;
    updateCardData("weekly", cardId);
  });
};

initPage();
