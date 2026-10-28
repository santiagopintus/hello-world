document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("sayHiButton");

  btn.addEventListener("click", function () {
    document.getElementById("greeting").style.display = "block";
    btn.style.display = "none";
  });
});
