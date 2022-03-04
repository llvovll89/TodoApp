const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

// 반복되는 이름은 대문자형식으로 지정 (ex 밑에꺼)
const HIDDEN_CLASSNEME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNEME);
    paintGreeting(username);
}

function paintGreeting(username){
    const imgBox = document.querySelector("h1");
    imgBox.classList.toggle("imgBoxs");
    greeting.innerText = `Hello!!!! ${username} (님)`;
    greeting.classList.remove(HIDDEN_CLASSNEME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNEME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}