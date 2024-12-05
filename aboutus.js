const homeButton = document.querySelector("#home");
homeButton.addEventListener('click',() => {
  window.location.href ="index.html";
})

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click',() => {
  window.location.href ="contact.html";
})

const signUpButton = document.querySelector("#sign-up");
signUpButton.addEventListener('click',() => {
  window.location.href ="signup.html";
})