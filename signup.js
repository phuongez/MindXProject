const homeButton = document.querySelector("#home");
homeButton.addEventListener('click',() => {
  window.location.href ="index.html";
})

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click',() => {
  window.location.href ="contact.html";
})

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click',() => {
  window.location.href ="about.html";
})

function registerUser(name, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return alert("Email đã được sử dụng.");
    }
  
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Bạn đã đăng ký tài khoản thành công!");
  }

const createAccountBtn = document.querySelector("#create-account");

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    registerUser(name, email, password);
  });


const loginBtn = document.querySelector("#log-in");
loginBtn.addEventListener('click',() => {
    window.location.href = "login.html"
})