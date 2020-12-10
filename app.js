function animatedForm() {
  const arrow = document.querySelectorAll(".fa-arrow-down");

  arrow.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

function validateUser(user) {
  if (user.value.length < 6) {
    console.log("not enough characters");
    error("rgb(189,87,87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
