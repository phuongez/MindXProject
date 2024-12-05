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

const signUpButton = document.querySelector("#sign-up");
signUpButton.addEventListener('click',() => {
  window.location.href ="signup.html";
})

function loginUser(identifier, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => 
      user.email === identifier && user.password === password
    );
  
    if (user) {
      console.log("Đăng nhập thành công!");
      alert(`Chào mừng, ${user.name}!`);
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = "index.html"
    } else {
      console.log("Tên đăng nhập hoặc mật khẩu không đúng.");
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  }

document.getElementById('login-button').addEventListener('click', (event) => {
    event.preventDefault();
    const identifier = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
    loginUser(identifier, password);
  });

  