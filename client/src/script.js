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

//Final Button
const finalButton = document.querySelector("#send-btn");

finalButton.addEventListener("click", () => {
  //email middleware
  const emailInput = document.querySelector("#mail").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    alert("Invalid email format");
    return;
  }

  //Letter Text middle ware
  const letterText = document.querySelector("textarea").value;
  if (!letterText.trim()) {
    alert("Please Enter your email!");
    return;
  }

  const payload = {
    email: emailInput,
    letter: letterText,
    delivery: selectedDelieveryButton,
    audience: selectedAudienceButton,
    createdAt: new Date().toISOString(),
  };

  // console.log("Done!");
});
