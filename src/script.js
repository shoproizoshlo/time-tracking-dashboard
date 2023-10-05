fetch("./src/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      //   console.log(item);
      if (item.title === "Work") {
        console.log("piska");
        console.log(item.timeframes.daily.current);
        console.log(item.timeframes.daily.previous);
      }
    });
  })
  .catch((error) => console.error("Error loading data:", error));

const periodRanges = document.querySelectorAll(".period-range");

periodRanges.forEach((period) => {
  period.addEventListener("click", () => {
    // Remove the "active" class from all elements
    periodRanges.forEach((element) => {
      element.classList.remove("active");
    });

    // Add the "active" class to the clicked element
    period.classList.add("active");
  });
});
