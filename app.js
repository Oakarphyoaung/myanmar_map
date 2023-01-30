let currentPlace = document.querySelector(".current-place");

let allpath = document.querySelectorAll(" .map path");

allpath.forEach((x) => {
  x.addEventListener("mouseover", (_) => {
    allpath.forEach(c=>c.classList.remove("active"));
            x.classList.add("active");
    currentPlace.innerText = x.getAttribute("title")
  });
});
