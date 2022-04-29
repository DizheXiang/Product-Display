const card = document.querySelector(".card");
const container = document.querySelector(".container");
const macBook = document.querySelector(".macBook img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const purchase = document.querySelector(".purchase");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 35;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 35;
  card.style.transform =
    `rotateX(${yAxis}deg)
    rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(150px)";
  macBook.style.transform = "translateZ(200px) rotateZ(-10deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  macBook.style.transform = "translateZ(0) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});