// SEARCH
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

// LOGIN MODAL
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

document.getElementById("submitLogin").onclick = function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginMsg").textContent = "Login successful!";
    setTimeout(() => modal.style.display = "none", 1000);
  } else {
    document.getElementById("loginMsg").textContent = "Incorrect credentials.";
  }
};
