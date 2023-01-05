const button = document.getElementsByClassName("theme")[0];
const body = document.getElementsByTagName("body")[0];
console.log(button);

// Asa declar o functie
const handleClick = () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    button.innerHTML = "Light-Theme";
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    button.innerHTML = "Dark-Theme";
  }
};
button.addEventListener("click", handleClick);

/* let headlineFour = document.querySelector("h3:nth-of-type(2)");
console.log(headlineFour); */
