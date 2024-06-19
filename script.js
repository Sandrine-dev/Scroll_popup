const nav = document.querySelector("nav");
const image = document.querySelector("#imgImprovise");
const popup = document.querySelector("#popup");
//console.log(image);
//console.log(popup);
const closePopup = document.querySelector("#closeBtn");
//console.log(closePopup);

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);

  //NAVBAR
  if (window.scrollY > 90) {
    nav.style.height = "50px";
  } else {
    nav.style.height = "90px";
  }

  //IMAGE IMPROVISE
  if (window.scrollY > 150) {
    image.style.opacity = "1";
    image.style.transform = "inherit";
  }

  //Find if you are at the bottom
  const scrolledTo = window.scrollY + window.innerHeight;
  const isReachBottom = document.body.scrollHeight;

  //console.log(scrolledTo, isReachBottom);

  //POPUP

  if (isReachBottom === scrolledTo) {
    //console.log("We Reached the bottom of the page");
    popup.style.opacity = "1";
    popup.style.transform = "inherit";
  }
});

//Make the popup dispear with a click
closePopup.addEventListener("click", () => {
  popup.remove();
});
// Bonus : quand on clicke sur la popup elle disparait pour toujours
