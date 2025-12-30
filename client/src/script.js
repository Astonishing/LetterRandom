//Date for top line [hero sec]
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, "0");
const day = String(d.getDate()).padStart(2, "0"); //Padestart: Adds 0 before x

const formatted = `${year}-${month}-${day}`;

document.querySelector("#date").textContent = formatted;

//Buttons Activeness
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const audienceButtons = document.querySelectorAll(".toggle-btn-audience");

audienceButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    audienceButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    console.log(btn);
  });
});


