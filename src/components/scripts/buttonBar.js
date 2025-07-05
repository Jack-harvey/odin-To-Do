import { createProjectForm } from "../../features/projects/scripts/form";
import { clearContent, initialLoad, userOpensProject } from "./html";

const buttonBarEl = document.querySelector("#buttonBar");

export const buttonBar = function (type) {
  clearContent("#buttonBar");
  buttonBarEvents();

  const newBtn = document.createElement("i");
  newBtn.classList.add(type);
  newBtn.classList.add("new");
  newBtn.classList.add("fa-solid");
  newBtn.classList.add("fa-plus");

  if (type == "todo") {
    const backBtn = document.createElement("i");
    backBtn.classList.add("back-btn");
    backBtn.classList.add("fa-solid");
    backBtn.classList.add("fa-house");

    buttonBarEl.append(backBtn, newBtn);
    return;
  }

  buttonBarEl.appendChild(newBtn);
  return;
};

const buttonBarEvents = function () {
  buttonBarEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("back-btn")) {
      initialLoad();
      userOpensProject();
    }
    if (e.target.classList.contains("new")) {
      createProjectForm();
      document.querySelector("dialog").showModal();
    }
  });
};
