const navigation = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (scrollY > navigation.offsetHeight + 150) {
    navigation.classList.add("active");
  } else {
    navigation.classList.remove("active");
  }
}
