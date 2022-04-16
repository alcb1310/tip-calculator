const billEl = document.getElementById("bill");
const peopleEl = document.getElementById("people");

function setTotalAmount(amount) {
  document.getElementById("js-total-amount").textContent = `$ ${amount.toFixed(
    2
  )}`;
}

function setPersonAmount(amount) {
  document.getElementById("js-person-amount").textContent = `$ ${amount.toFixed(
    2
  )}`;
}

function clearSelected() {
  const btns = document.getElementsByClassName("js-btn");

  //   console.log(btns.length);

  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("selected");
  }
}

function calculate(percentage) {
  if (!isNaN(billEl.value) && !isNaN(peopleEl.value) && peopleEl.value > 0) {
    const totalAmount = (billEl.value * percentage) / 100;
    setTotalAmount(totalAmount);
    setPersonAmount(totalAmount / peopleEl.value);
  } else {
    document.getElementById("js-total-amount").textContent =
      "need a numeric value";
  }
}

document.getElementById("js-btn-5").addEventListener("click", (event) => {
  clearSelected();
  event.target.classList.add("selected");
  calculate(5);
});

document.getElementById("js-btn-10").addEventListener("click", (event) => {
  clearSelected();
  event.target.classList.add("selected");
  calculate(10);
});

document.getElementById("js-btn-15").addEventListener("click", (event) => {
  clearSelected();
  event.target.classList.add("selected");
  calculate(15);
});

document.getElementById("js-btn-25").addEventListener("click", (event) => {
  clearSelected();
  event.target.classList.add("selected");
  calculate(25);
});

document.getElementById("js-btn-50").addEventListener("click", (event) => {
  clearSelected();
  event.target.classList.add("selected");
  calculate(50);
});

document.getElementById("js-reset").addEventListener("click", () => {
  clearSelected();
  billEl.value = 0;
  peopleEl.value = 1;
  calculate(100);
});
