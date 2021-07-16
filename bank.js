const login = document.getElementById("login-btn");
login.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction");
    transactionArea.style.display = "block";
});