export const buttonBar = function (type) {
  const buttonBarEl = document.querySelector("#buttonBar");

  const newBtn = document.createElement("button");
  newBtn.type = "button";
  newBtn.classList.add(type);
  newBtn.classList.add("new");

  if ((type = "todo")) {
    const backBtn = document.createElement("button");
    backBtn.type = "button";
    backBtn.classList.add("back-btn");

    buttonBarEl.append(backBtn, newBtn);
    return;
  }

  buttonBarEl.appendChild(newBtn);
  return;
};
