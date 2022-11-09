//Hamburger

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

//Newsletter
let subBtn = document.querySelector(".e-btn");
let emailAdd = document.querySelectorAll(".e-bar");

subBtn.addEventListener("click", () => {
  let userEmail = document.querySelector(".e-bar").value;

  let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,23}$/;

  if (userEmail.length === 0 || regEx.test(userEmail) == false) {
    alert("Please enter a valid email address");
  } else {
    alert("Thank You For Your Subscription!");
  }
  emailAdd.forEach((input) => (input.value = ""));
});
