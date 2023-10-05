fetch("./src/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error loading data:", error));

document.getElementById("daily").addEventListener("click", () => {
  console.log("hello");
});

document.querySelectorAll(".period-range").forEach((period) => {
  period.addEventListener("click", () => {
    period.classList.toggle("active");
  });
});
