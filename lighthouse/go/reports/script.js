const report = document.getElementById("report");
const embed = document.getElementById("embed");

report.addEventListener("change", function () {
  const selectedReport = report.options[report.selectedIndex].value;
  embed.src = "./" + selectedReport;
});
