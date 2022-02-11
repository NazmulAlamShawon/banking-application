document.getElementById('deposit-buttton').addEventListener('click', function(){

 const depositInput = document.getElementById('deposit-input');
 const newDepositText = depositInput.value;
 const newDepositAmount = parseFloat(newDepositText);
 
// update  deposit total
 const depositTotal = document.getElementById('deposit-total');

 const previousDepositText = depositTotal.innerText;
 const previousDepositAmount = parseFloat(previousDepositText);

 const newDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

 //update ballance
//  const balanceTotal = document.getElementById('balance-total');
//  const balanceTotalText=balanceTotal.innerText;
//  const previousBalanceTotal =parseFloat(balanceTotalText);
//  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//  balanceTotal.innerText=newBalanceTotal;


 //clear input 
 depositInput.value = '';

 

     
})


//handle withdraw



