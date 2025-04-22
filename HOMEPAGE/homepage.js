document.addEventListener("DOMContentLoaded", () => {
    const user = sessionStorage.getItem("loggedInUser");
  
    if (!user) {
      // Not logged in? Redirect to login page
      window.location.href = "#";
    }
  
    // Handle logout
    const logoutLink = document.querySelector(".dropdown-content a[href='SignUp_LogIn_Form.html']");
    if (logoutLink) {
      logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "#";
      });
    }
  });
  