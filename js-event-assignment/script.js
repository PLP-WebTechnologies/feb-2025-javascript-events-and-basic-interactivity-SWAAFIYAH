document.addEventListener("DOMContentLoaded", function () {
    let submit_button = document.getElementById("submitbtn");
  
    submit_button.addEventListener("click", function () {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }
  
      alert("Form submitted!");
  
      // Clear the form
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
    });
  });
  