// login button 
const login = document.getElementById("login-btn");
login.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction");
    transactionArea.style.display = "block";
});

// Deposit Amount
const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function(){
    const depositInput = document.getElementById("deposit-input").value;
    const depositAmount = parseFloat(depositInput);
    updateBalance("total-deposit", depositAmount);
    updateBalance("total-balance", depositAmount);
    document.getElementById("deposit-input").value = "";
});
// update deposit function 
function updateBalance(id, depositAmount){
    const Balance = document.getElementById(id).innerText;
    const BalanceAmount = parseFloat(Balance);
    const updateTotal = BalanceAmount + depositAmount;
    document.getElementById(id).innerText = updateTotal;
}
// withdraw Amount
const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input").value;
    const withdrawAmount = parseFloat(withdrawInput);
    updateWithdraw("total-withdraw", withdrawAmount);
    updateWithdrawTotal("total-balance", withdrawAmount);
    document.getElementById("withdraw-input").value = "";
});
// update withrawAmount function
function updateWithdrawTotal(id, withdrawAmount){
    const Balance = document.getElementById(id).innerText;
    const BalanceAmount = parseFloat(Balance);
    if(withdrawAmount > BalanceAmount){
        alert("Sorry!!!\nYour withdraw amount is cross the main balance...");
    }
    else{
    const updateTotal = BalanceAmount - withdrawAmount;
    document.getElementById(id).innerText = updateTotal;
    }
}

function updateWithdraw(id, withdrawAmount){
    const Balance = document.getElementById(id).innerText;
    const BalanceAmount = parseFloat(Balance);
    if(withdrawAmount > BalanceAmount){
        document.getElementById(id).innerText = BalanceAmount;
    }
    else{
        const updateTotal = BalanceAmount + withdrawAmount;
        document.getElementById(id).innerText = updateTotal;
    }   
}