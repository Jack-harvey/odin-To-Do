export const createFormEventListener = function (id) {
  const formEl = document.querySelector(id);

  formEl.addEventListener("submit", (e) => {
    console.log("submitted data!");
  });
};

export const createCloseFormEventListener = function (id) {
  const formEl = document.querySelector("dialog");

  formEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
      document.querySelector("dialog").close();
      document.querySelector("#newProjectForm").reset();
      console.log("close it down");
    }
  });
};
