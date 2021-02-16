let header = document.querySelector("header");

window.onscroll = function () {
  showBtnFunction();
  headerFunction();
};

const headerFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};

let toTopBtn = document.querySelector("#toTopBtn");
const showBtnFunction = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

let toTopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
// Instead of onclick in html you could use toTopButn.
// addEventListener("click", toTopFunction);

let menuBtn = document.getElementById("menuBtn");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

const showMenuFunction = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showMenuFunction);
  }
  nav.classList.toggle("responsive");
};

menuBtn.addEventListener("click", showMenuFunction);

//Let's count to that baby!;
let babyDue = new Date(2021, 2, 2, 12);
let babyDueDate = new Date(2021, 2, 2, 12).getTime();

let interval = setInterval(function () {
  let now = new Date();
  let currentTime = new Date().getTime();
  let difference = babyDueDate - currentTime;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days +
    " days, " +
    hours +
    " hours, " +
    minutes +
    " minutes and " +
    seconds +
    " seconds until the birth of my daughter";
  document.getElementById("dueDate").innerHTML = babyDue;
  document.getElementById("currentTime").innerHTML = now;
});

// let timeToBabyInDays = (babyDueDate - currentTime) / 1000 / 60 / 60 / 24;
// console.log("Laskettu aika on: " + babyDueDate);
// console.log(`laskettuun aikaan on  ${Math.round(timeToBabyInDays)} päivää :)`);
// let timeToBabyHours = timeToBabyInDays * 24 - 13 * 24;
// console.log(` ${Math.round(timeToBabyHours)} tuntia`);
// console.log(
//   "Milliseconds to the due date from Jan 1 1970: " + babyDueDate.getTime()
// );
// console.log("The same in minutes: " + babyDueDate.getTime() / 1000 / 60);
// console.log(
//   "And current time in minutes: " + currentTime.getTime() / 1000 / 60
// );
// console.log(
//   "Duedate-today = " +
//     (babyDueDate.getTime() / 1000 / 60 - currentTime.getTime() / 1000 / 60) +
//     " minutes."
// );
// console.log(
//   "And in hours: " +
//     (babyDueDate.getTime() / 1000 / 60 / 60 -
//       currentTime.getTime() / 1000 / 60 / 60)
// );
// console.log(
//   "Aand in days: " +
//     (babyDueDate.getTime() / 1000 / 60 / 60 / 24 -
//       currentTime.getTime() / 1000 / 60 / 60 / 24)
// );
// console.log(
//   `Let's subtrackt the days and hours from that numbers: 13 days is ${
//     13 * 24
//   } hours. So let's take that from the hour difference, so that we can say it's 13 days and: ${
//     babyDueDate.getTime() / 1000 / 60 / 60 -
//     currentTime.getTime() / 1000 / 60 / 60 -
//     currentTime.getTime() / 1000 / 60 / 60
//   } hours to birth `
// );
// console.log(
//   `Next we'll subtract the hours. Now it's 9 hours, which is 9*60 minutes, meaning ${
//     9 * 60
//   } minutes`
// );
