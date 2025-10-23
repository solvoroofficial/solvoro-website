<!-- script/layout-functions.js -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("solvoroUser"));
  const userLink = document.querySelector("#userLink");

  if (userData && userLink) {
    userLink.textContent = userData.fullName;
    userLink.href = "dashboard.html";
  } else if (userLink) {
    userLink.textContent = "Login";
    userLink.href = "login.html";
  }

  // Logout logic (if present)
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("solvoroUser");
      alert("You have logged out!");
      window.location.href = "index.html";
    });
  }
});
</script>
