document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Toggle to register form
  document.querySelector(".register-btn").addEventListener("click", () => {
    container.classList.add("active");
  });

  // Toggle to login form
  document.querySelector(".login-btn").addEventListener("click", () => {
    container.classList.remove("active");
  });

  // REGISTER logic
  const registerForm = document.querySelector(".form-box.register form");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = registerForm.querySelector('input[placeholder="Username"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[placeholder="Password"]').value;

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const user = { username, email, password };
    localStorage.setItem("selfcare_user", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    container.classList.remove("active");
  });

  // LOGIN logic
  const loginForm = document.querySelector(".form-box.login form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = loginForm.querySelector('input[placeholder="Username"]').value.trim();
    const password = loginForm.querySelector('input[placeholder="Password"]').value;

    const storedUser = JSON.parse(localStorage.getItem("selfcare_user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      window.location.href = "homepage.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  // LOGIN logic (add this inside the login form submit handler)
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        sessionStorage.setItem("loggedInUser", storedUser.username);
          alert("Login successful!");
          window.location.href = "homepage.html";}
  });
});
