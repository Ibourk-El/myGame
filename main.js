let main = document.querySelectorAll("main");

main.forEach((e, index) => {
  e.addEventListener("click", () => {
    location.href = "./Questions/index.html";
    localStorage.setItem("index", index);
  });
});
