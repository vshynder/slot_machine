import SlotMachine from "./SlotMachine.js";

const slotMachine = new SlotMachine();

// const FPS = 30;

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const images = [
//   "Bell",
//   "Bomb",
//   "Cherry",
//   "Grape",
//   "Lemon",
//   "Seven",
//   "Watermelon",
// ];
// const btn = document.querySelector(".btn");

// // canvas.style.width = "960px";
// // canvas.style.height = "540px";
// // canvas.width = window.innerWidth;
// // canvas.height = window.innerHeight;
// canvas.width = 1920;
// canvas.height = 1080;
// // let reelFrame;

// function makeFrame() {
//   const reelFrame = new Image();
//   reelFrame.src = "./img/Reel_Frame.png";
//   reelFrame.addEventListener("load", () => {
//     ctx.drawImage(reelFrame, 487, 100);
//   });
// }

// function insertSpin() {
//   const spin = new Image();
//   spin.src = "./img/SPIN_normal.png";
//   spin.addEventListener("load", () => {
//     ctx.drawImage(spin, 1500, 850);
//   });
// }

// function insertIcon(col, row, name) {
//   ctx.clearRect(580 + row * 285, 170 + col * 265, 190, 190);
//   const icon = new Image();
//   icon.src = `./img/Symbols/Symbol_${name}.png`;
//   icon.addEventListener("load", () => {
//     ctx.drawImage(icon, 580 + row * 285, 170 + col * 265, 190, 190);
//   });
// }
// function insertIcons(k = 0) {
//   let counter = 0;
//   for (let j = 0 + k; j < 3 + k; j++) {
//     for (let i = 0 + k; i < 3 + k; i++) {
//       console.log(k);
//       insertIcon(i, j, images[counter]);
//       counter++;
//       if (counter === 7) counter = 0;
//     }
//   }
// }

// makeFrame();
// insertSpin();
// insertIcons();
// let spinTimer;

// btn.addEventListener("click", handleSpinClick);
// function handleSpinClick() {
//   spinTimer = setInterval(spinIcons, 1000 / FPS);
// }

// // let counterForSpin = 0;
// let spinStopCounter = 0;
// let isSpining = false;

// function spinIcons() {
//   isSpining = true;
//   //   counterForSpin++;
//   spinStopCounter++;
//   //   if (counterForSpin === 7) counterForSpin = 0;
//   insertIcon(0, 0, images[Math.floor(Math.random() * 7)]);
//   insertIcon(1, 0, images[Math.floor(Math.random() * 7)]);
//   insertIcon(2, 0, images[Math.floor(Math.random() * 7)]);

//   insertIcon(0, 1, images[Math.floor(Math.random() * 7)]);
//   insertIcon(1, 1, images[Math.floor(Math.random() * 7)]);
//   insertIcon(2, 1, images[Math.floor(Math.random() * 7)]);

//   insertIcon(0, 2, images[Math.floor(Math.random() * 7)]);
//   insertIcon(1, 2, images[Math.floor(Math.random() * 7)]);
//   insertIcon(2, 2, images[Math.floor(Math.random() * 7)]);
//   //   console.log(counterForSpin);
//   if (spinStopCounter === 55) {
//     clearInterval(spinTimer);
//     spinStopCounter = 0;
//   }
// }
