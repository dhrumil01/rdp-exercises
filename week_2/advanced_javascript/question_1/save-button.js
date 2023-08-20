document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveButton");
  
    saveButton.addEventListener("click", function () {
      if (!saveButton.classList.contains("saved-button")) {
        saveButton.classList.add("saved-button");
        saveButton.innerHTML = "Saved";
      }
    });
  });
  