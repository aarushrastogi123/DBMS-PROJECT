document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    const usernameInput = document.getElementById("register-username");
    const usernameMsg = document.getElementById("username-msg");
  
    // Simulated existing usernames (for frontend-only testing)
    const existingUsernames = ["user123", "admin", "john_doe", "selfcarequeen"];
  
    // Toggle form visibility
    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', () => {
        container.classList.add('active');
      });
  
      loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }
  
    // Username uniqueness check
    if (usernameInput && usernameMsg) {
      usernameInput.addEventListener("input", () => {
        const enteredUsername = usernameInput.value.trim().toLowerCase();
  
        if (enteredUsername === "") {
          usernameMsg.textContent = "";
          usernameMsg.classList.remove("valid");
          return;
        }
  
        if (existingUsernames.includes(enteredUsername)) {
          usernameMsg.textContent = "Username already taken.";
          usernameMsg.classList.remove("valid");
        } else {
          usernameMsg.textContent = "Username is available.";
          usernameMsg.classList.add("valid");
        }
      });
    }
  });
  