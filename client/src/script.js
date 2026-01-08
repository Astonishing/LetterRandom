//Date for top line [hero sec]
const d = new Date();
const formatted = d.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#date").textContent = formatted;
});

let selectedDelieveryButton = "6 months"; //Button to Pass at B.E
let selectedAudienceButton = "private"; //Button to Pass at B.E

const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDelieveryButton = btn.textContent.trim().toLocaleLowerCase(); //Button to Pass at B.E
  });
});

const audienceButtons = document.querySelectorAll(".toggle-btn-audience");

audienceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    audienceButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedAudienceButton = btn.textContent.trim().toLocaleLowerCase(); //Button to Pass at B.E
  });
});

const finalButton = document.querySelector("#send-btn");
const modalOverlay = document.querySelector("#modal-overlay");
const loader = document.querySelector("#loader");
const successTick = document.querySelector("#success-tick");
const modalTitle = document.querySelector("#modal-title");
const modalMessage = document.querySelector("#modal-message");
const closeModal = document.querySelector("#close-modal");

finalButton.addEventListener("click", async () => {
  const emailInput = document.querySelector("#mail").value;
  const letterText = document.querySelector("textarea").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    alert("Invalid email format");
    return;
  }
  if (!letterText.trim()) {
    alert("Please write your letter first!");
    return;
  }

  modalOverlay.style.display = "flex";
  loader.style.display = "block";
  successTick.style.display = "none";
  closeModal.style.display = "none";
  modalTitle.textContent = "Sending to the future...";

  const payload = {
    email: emailInput,
    letter: letterText,
    delivery: selectedDelieveryButton,
    audience: selectedAudienceButton,
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await fetch("https://letterlate.onrender.com/letters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      loader.style.display = "none";
      successTick.style.display = "block";
      modalTitle.textContent = "Letter Sent!";
      modalMessage.textContent = `Your message is now traveling to ${selectedDelieveryButton} from now.`;
      closeModal.style.display = "inline-block";
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    modalOverlay.style.display = "none";
    alert("Something went wrong. Please try again.");
  }
});

closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  document.querySelector("textarea").value = "";
  document.querySelector("#mail").value = "";
});
