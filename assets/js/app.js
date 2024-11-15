document.addEventListener("DOMContentLoaded", () => {
  const hour = document.querySelector(".arrow-hour");
  const minute = document.querySelector(".arrow-minute");
  const second = document.querySelector(".arrow-second");
  setInterval(() => {
    const date = new Date();
    time(date, hour, minute, second);
  }, 100);
  createDiv(".time-line");
  createDiv(".hours", 30, 12, true);
});

function createDiv(selector, count = 6, number = 60, text = false) {
  const timeLine = document.querySelector(selector);
  for (let i = 0; i < number; i++) {
    const countLine = document.createElement("div");
    countLine.style.transform = `rotate(${(i + 1) * count}deg)`;
    if (text) {
      const divText = document.createElement("div");
      divText.style.transform = `rotate(-${(i + 1) * count}deg)`;
      divText.innerText = i + 1;
      countLine.appendChild(divText);
    }
    timeLine.append(countLine);
  }
}

function time(date, hour, minute, second) {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  hour.style.transform = `rotate(${h * 30 + m * (360 / 720)}deg)`;
  minute.style.transform = `rotate(${m * 6 + s * (360 / 3600)}deg)`;
  second.style.transform = `rotate(${s * 6}deg)`;
}
