export default class SlotMachine {
  constructor(
    canvasScale = 1,
    FPS = 10,
    canvasId = "#canvas",
    spinBtn = ".btn"
  ) {
    this.FPS = FPS;
    this.canvas = document.querySelector(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.canvasScale = canvasScale;
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.canvas.style.width = 1920 * this.canvasScale + "px";
    this.canvas.style.height = 1080 * this.canvasScale + "px";
    this.spinBtn = document.querySelector(spinBtn);
    this.spinStopCounter1 = 0;
    this.spinStopCounter2 = 0;
    this.spinStopCounter3 = 0;
    this.spinStop1 = 55;
    this.spinStop2 = 65;
    this.spinStop3 = 75;
    this.images = [
      "Bell",
      "Bomb",
      "Cherry",
      "Grape",
      "Lemon",
      "Seven",
      "Watermelon",
    ];
    this.init();
  }
  init() {
    this.makeFrame();

    this.insertSpin();
    this.spinBtnPosition();

    this.wheel1 = this.generateWheels(15);
    this.wheel2 = this.generateWheels(16);
    this.wheel3 = this.generateWheels(13);

    this.insertIcons();

    this.counter11 = 0;
    this.counter12 = 1;
    this.counter13 = 2;
    this.counter21 = 0;
    this.counter22 = 1;
    this.counter23 = 2;
    this.counter31 = 0;
    this.counter32 = 1;
    this.counter33 = 2;

    this.spinBtn.addEventListener("click", this.handleSpinClick.bind(this));

    this.resultWheel1;

    this.isReady1 = false;
    this.isReady2 = false;
    this.isReady3 = false;
  }
  makeFrame() {
    const reelFrame = new Image();
    reelFrame.src = "./img/Reel_Frame.png";
    reelFrame.addEventListener("load", () => {
      this.ctx.drawImage(reelFrame, 487, 100);
    });
    this.ctx.save();
  }

  generateWheels(n) {
    const wheel = [];
    for (let i = 0; i < n; i++) {
      wheel.push(this.images[Math.floor(Math.random() * 7)]);
    }
    return wheel;
  }

  insertSpin() {
    const spin = new Image();
    spin.src = "./img/SPIN_normal.png";
    spin.addEventListener("load", () => {
      this.ctx.drawImage(spin, 1500, 850);
    });
  }

  generateIcon(col, row, name) {
    this.ctx.clearRect(580 + row * 285, 170 + col * 265, 190, 190);
    const icon = new Image();
    icon.src = `./img/Symbols/Symbol_${name}.png`;
    icon.addEventListener("load", () => {
      this.ctx.drawImage(icon, 580 + row * 285, 170 + col * 265, 190, 190);
    });
  }
  insertIcons() {
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      this.generateIcon(i, 0, this.wheel1[counter]);
      this.generateIcon(i, 1, this.wheel2[counter]);
      this.generateIcon(i, 2, this.wheel3[counter]);
      counter++;
    }
  }

  spinWheel1() {
    this.spinStopCounter1++;
    this.counter11++;
    this.counter12++;
    this.counter13++;

    if (this.counter11 === this.wheel1.length) this.counter11 = 0;
    if (this.counter12 === this.wheel1.length) this.counter12 = 0;
    if (this.counter13 === this.wheel1.length) this.counter13 = 0;

    //first col
    this.generateIcon(0, 0, this.wheel1[this.counter11]);
    this.generateIcon(1, 0, this.wheel1[this.counter12]);
    this.generateIcon(2, 0, this.wheel1[this.counter13]);

    if (this.spinStopCounter1 === this.spinStop1) {
      clearInterval(this.spinTimer1, this.isBtnActive(1));
      this.spinStopCounter1 = 0;
    }
  }
  spinWheel2() {
    this.spinStopCounter2++;
    this.counter21++;
    this.counter22++;
    this.counter23++;

    if (this.counter21 === this.wheel2.length) this.counter21 = 0;
    if (this.counter22 === this.wheel2.length) this.counter22 = 0;
    if (this.counter23 === this.wheel2.length) this.counter23 = 0;

    //second col
    this.generateIcon(0, 1, this.wheel2[this.counter21]);
    this.generateIcon(1, 1, this.wheel2[this.counter22]);
    this.generateIcon(2, 1, this.wheel2[this.counter23]);

    if (this.spinStopCounter2 === this.spinStop2) {
      clearInterval(this.spinTimer2, this.isBtnActive(2));
      this.spinStopCounter2 = 0;
    }
  }
  spinWheel3() {
    this.spinStopCounter3++;
    this.counter31++;
    this.counter32++;
    this.counter33++;

    if (this.counter31 === this.wheel3.length) this.counter31 = 0;
    if (this.counter32 === this.wheel3.length) this.counter32 = 0;
    if (this.counter33 === this.wheel3.length) this.counter33 = 0;

    //third col
    this.generateIcon(0, 2, this.wheel3[this.counter31]);
    this.generateIcon(1, 2, this.wheel3[this.counter32]);
    this.generateIcon(2, 2, this.wheel3[this.counter33]);

    if (this.spinStopCounter3 === this.spinStop3) {
      clearInterval(this.spinTimer3, this.isBtnActive(3));
      this.spinStopCounter3 = 0;
    }
  }

  handleSpinClick() {
    this.spinBtn.setAttribute("disabled", true);
    this.countResult(1);
    this.countResult(2);
    this.countResult(3);

    this.spinTimer1 = setInterval(this.spinWheel1.bind(this), 1000 / this.FPS);
    this.spinTimer2 = setInterval(this.spinWheel2.bind(this), 1000 / this.FPS);
    this.spinTimer3 = setInterval(this.spinWheel3.bind(this), 1000 / this.FPS);

    // console.log(this.wheel1, this.wheel2, this.wheel3);
  }

  isBtnActive(n) {
    if (n == 1) this.isReady1 = true;
    if (n == 2) this.isReady2 = true;
    if (n == 3) this.isReady3 = true;
    if (this.isReady1 && this.isReady2 && this.isReady3) {
      this.isReady1 = false;
      this.isReady2 = false;
      this.isReady3 = false;
      this.spinBtn.removeAttribute("disabled");
      this.wheel1 = this.generateWheels(15);
      this.wheel2 = this.generateWheels(16);
      this.wheel3 = this.generateWheels(13);
    }
  }

  countResult(n) {
    if (n !== 1 && n !== 2 && n !== 3) {
      console.log("There is no such wheel");
      return;
    }
    if (n === 1) {
      let plusNumber;

      if (this.resultWheel1) {
        plusNumber = this.resultWheel1;
      } else {
        plusNumber = 1;
      }

      const multiplayer = Math.floor(this.spinStop1 / this.wheel1.length);

      this.resultWheel1 =
        this.spinStop1 - this.wheel1.length * multiplayer + plusNumber;
      if (this.resultWheel1 > this.wheel1.length) {
        this.resultWheel1 = this.resultWheel1 - this.wheel1.length;
      }

      this.resultName1 = this.wheel1[this.resultWheel1];
      console.log(
        `First reel result: index(${this.resultWheel1}), name(${this.resultName1})`
      );
      return;
    }
    if (n === 2) {
      let plusNumber;

      if (this.resultWheel2) {
        plusNumber = this.resultWheel2;
      } else {
        plusNumber = 1;
      }

      const multiplayer = Math.floor(this.spinStop2 / this.wheel2.length);

      this.resultWheel2 =
        this.spinStop2 - this.wheel2.length * multiplayer + plusNumber;
      if (this.resultWheel2 > this.wheel2.length) {
        this.resultWheel2 = this.resultWheel2 - this.wheel2.length;
      }

      this.resultName2 = this.wheel2[this.resultWheel2];
      console.log(
        `Second reel result: index(${this.resultWheel2}), name(${this.resultName2})`
      );
      return;
    }
    if (n === 3) {
      let plusNumber;

      if (this.resultWheel3) {
        plusNumber = this.resultWheel3;
      } else {
        plusNumber = 1;
      }

      const multiplayer = Math.floor(this.spinStop3 / this.wheel3.length);

      this.resultWheel3 =
        this.spinStop3 - this.wheel3.length * multiplayer + plusNumber;
      if (this.resultWheel3 > this.wheel3.length) {
        this.resultWheel3 = this.resultWheel3 - this.wheel3.length;
      }

      this.resultName3 = this.wheel3[this.resultWheel3];
      console.log(
        `Third reel result: index(${this.resultWheel3}), name(${this.resultName3})`
      );
      return;
    }
  }
  isWin() {
    if (
      this.resultName1 === this.resultName2 &&
      this.resultName2 === this.resultName3
    ) {
      alert("Congratulations, you won the jackpot!");
    }
  }
  spinBtnPosition() {
    // this.spinBtn.style.position = "absolute";
    this.spinBtn.style.top = 850 * this.canvasScale + "px";
    this.spinBtn.style.left = 1500 * this.canvasScale + "px";
    this.spinBtn.style.width = 144 * this.canvasScale + "px";
    this.spinBtn.style.height = 144 * this.canvasScale + "px";
  }
}
