// const periodRanges = document.querySelectorAll(".period-range");
// const lastWeekHours = document.getElementById("last-week-hours");
// const currentWeekHours = document.getElementById("current-week-hours");
// const lastPeriod = document.getElementById("last-period");
// const cardType = document.getElementById("work"); // Update with appropriate card identifier

// const fetchData = async () => {
//   try {
//     const response = await fetch("./src/data.json"); // Adjust the path accordingly
//     const jsonData = await response.json();
//     return jsonData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// periodRanges.forEach((period) => {
//   period.addEventListener("click", async () => {
//     // Remove the "active" class from all elements
//     periodRanges.forEach((element) => {
//       element.classList.remove("active");
//     });

//     const selectedPeriod = period.id;

//     //   change name of the period
//     if (selectedPeriod === "daily") {
//       lastPeriod.textContent = `Day`;
//     } else if (selectedPeriod === "weekly") {
//       lastPeriod.textContent = `Week`;
//     }
//     if (selectedPeriod === "monthly") {
//       lastPeriod.textContent = `Month`;
//     }

//     const jsonData = await fetchData();
//     //   change data hours base in JSON file

//     jsonData.forEach((cardData) => {
//       const data = cardData.timeframes[selectedPeriod];
//       const cardTitle = cardData.title;
//       if (cardType.id === cardTitle.toLowerCase()) {
//         currentWeekHours.textContent = `${data.current}hrs`;
//         lastWeekHours.textContent = `${data.previous}hrs`;
//       }
//     });

//     // Add the "active" class to the clicked element
//     period.classList.add("active");
//   });
// });

const periodRanges = document.querySelectorAll(".period-range");
const lastWeekHours = document.querySelectorAll(".last-week-hours");
const cardTypes = document.querySelectorAll(".card-type");

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
      lastWeekHours[index].textContent = `${data.previous}hrs`;
    }
  });
};

periodRanges.forEach((period) => {
  period.addEventListener("click", async () => {
    const selectedPeriod = period.id;

    cardTypes.forEach((card) => {
      const cardId = card.id;
      updateCardData(selectedPeriod, cardId);
    });
  });
});
