const activeBtn = document.querySelectorAll(".head-module-btn");
const  activeBody = document.querySelectorAll(".body-content");
const btnDetailed = document.querySelectorAll(".btn-detailed");
const activeDetailed = document.querySelectorAll(".detailed-content");

const deactivationBtn = () => {
    activeBtn.forEach(item  => item.classList.remove("active"));
    activeBody.forEach(item  => item.classList.remove("active"));
};

activeBtn.forEach((btn,i) => btn.addEventListener("click", () => {
    deactivationBtn();
    btn.classList.add("active");
    activeBody[i].classList.add("active");
}));

btnDetailed.forEach((btn,i) => btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    activeDetailed[i].classList.toggle("active");
}));

