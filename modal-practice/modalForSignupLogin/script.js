"use strict";
// console.clear();

// Ensure DOM is loaded before accessing elements
window.addEventListener("DOMContentLoaded", () => {
  const url = location.href;
  const urlObj = new URL(url);
  const endPoint = urlObj.pathname;

  console.log("Current endpoint:", endPoint);

  // Show login modal if URL is /login
  if (endPoint === "/login") {
    const loginModal = document.getElementById("loginModal");
    if (loginModal) {
      const modal = new bootstrap.Modal(loginModal);
      modal.show();
    }
  }

  // Show signup modal if URL is /signup
  else if (endPoint === "/signup") {
    const signupModal = document.getElementById("signupModal");
    if (signupModal) {
      const modal = new bootstrap.Modal(signupModal);
      modal.show();
    }
  }
});
