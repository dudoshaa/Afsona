const btns = document.querySelectorAll(".btn");
const paragriph = document.querySelectorAll("p");
const h1 = document.querySelector("h1");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.style.fontFamily = btn.textContent;
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
const fontBtns = document.querySelectorAll(".font-btn");

let count = 20;
let h = 60;
document.body.style.fontSize = `${count}px`;

fontBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "+") {
      if (count >= 40) {
        btn.disabled = true;
        return;
      }
      count += 5;
      h += 5;

      fontBtns[0].disabled = false;
    }

    if (btn.textContent == "-") {
      if (count <= 15) {
        btn.disabled = true;
        return;
      }
      count -= 5;
      h -= 5;

      fontBtns[1].disabled = false;
    }

    document.body.style.fontSize = `${count}px`;
    h1.style.fontSize = `${h}px`;

    fontBtns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");
  });
});

const bgImages = [
  "images/qizilqum.jpg",
  "images/qizilqum-center.jpg",
  "images/qizilqum-sunset.jpg",
];

let current = 0;
const bg = document.getElementById("changeBgBtn");
bg.addEventListener("click", () => {
  current = (current + 1) % bgImages.length;
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${bgImages[current]}')`;
  bg.style.transition = "0.3s";
});
