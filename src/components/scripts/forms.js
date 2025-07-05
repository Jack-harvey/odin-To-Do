export const createFormEventListener = function (id) {
  const formEl = document.querySelector(id);

  formEl.addEventListener("submit", (e) => {
    console.log("submitted data!");
  });
};
