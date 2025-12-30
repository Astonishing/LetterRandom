//Date for top line [hero sec]
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, "0");
const day = String(d.getDate()).padStart(2, "0"); //Padestart: Adds 0 before x

const formatted = `${year}-${month}-${day}`;
console.log(formatted);

document.querySelector("#date").innerHTML = formatted;
