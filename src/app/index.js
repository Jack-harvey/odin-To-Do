import "../components/style/style.css";

import { initialLoad, userOpensProject } from "../components/scripts/html";

document.addEventListener("DOMContentLoaded", () => {
  initialLoad();
  userOpensProject();
});
