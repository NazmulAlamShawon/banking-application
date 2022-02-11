document.getElementById('wihdraw-buttton').addEventListener('click', function (){
      
     
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);


 
// update  Withdraw total

    const withdrawTotals = document.getElementById('withdraw-total');
   
    const previousWithdrawText = withdrawTotals.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

   const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
   withdrawTotals.innerText = newWithdrawTotal;
  

//  update ballance 

 const balanceTotal = document.getElementById('balance-total');
 const balanceTotalText=balanceTotal.innerText;
 const previousBalanceTotal =parseFloat(balanceTotalText);
 const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
 balanceTotal.innerText=newBalanceTotal;


 //clear input 
 withdrawInput.value = '';
    
})
