document.addEventListener("DOMContentLoaded", function () {
  // Get form and dropdown elements
  const form = document.getElementById("iskanje-avtomobilov");
  const brandDropdown = document.getElementById("znamka-dropdown");
  const modelDropdown = document.getElementById("model-dropdown");

  // Function to handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get selected values
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;

    // Check conditions and take action
    if ((selectedBrand === "Audi" && selectedModel === "Izberite model") || (selectedBrand === "Audi" && selectedModel === "RS7") || selectedBrand === "Vse-znamke") {
      window.location.href = "rezultati.html"; // Redirect if criteria met
    } else {
      // Show Sweet Alert with custom message if criteria not met
      swal({
        title: "Ni zadetkov!",
        text: "Trenutno med oglasi ni zadetkov, ki bi ustrezali vaših kriterijem iskanja.",
        imageUrl: "icons/alert_triangle_icon.png",
        confirmButtonColor: "#073257"
      });
    }
  });
});