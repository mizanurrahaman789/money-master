
document.getElementById('calculate-button').addEventListener('click', function () {
      // clothes input update
      const clothesInput = document.getElementById('clothes-input');
      const clothesAmountText = clothesInput.value;
      const clothesAmount = parseFloat(clothesAmountText);

      // rent update
      const rentInput = document.getElementById('rent-input');
      const rentAmountText = rentInput.value;
      const rentAmount = parseFloat(rentAmountText);
      // food cost update
      const foodInput = document.getElementById('food-input');
      const foodAmountText = foodInput.value;
      const foodAmount = parseFloat(foodAmountText);

      const totalCost = clothesAmount + rentAmount + foodAmount
      //Expenses update
      const totalExpenses = document.getElementById('total-expenses')
      const totalAmountText = totalExpenses.innerText;
      const totalAmount = parseFloat(totalAmountText)
      totalExpenses.innerText = totalAmount + totalCost;
      // total income update
      const incomeInput = document.getElementById('income-input')
      const incomeAmountText = incomeInput.value;
      const incomeAmount = parseFloat(incomeAmountText)
      const totalIncome = incomeAmount - totalCost;


      const balanceTotal = document.getElementById('balance-total')
      const balanceAmountText = balanceTotal.innerText;
      const balanceAmount = parseFloat(balanceAmountText)
      balanceTotal.innerText = balanceAmount + totalIncome;

      clothesInput.value = '';
      rentInput.value = '';
      foodInput.value = '';
      incomeInput.value = '';


      const balanceTotalAmount = document.getElementById('total-amount');
      const balanceTotalAmountText = balanceTotalAmount.value;
      const totalBalanceTotalAmountText = parseFloat(balanceTotalAmountText)

})