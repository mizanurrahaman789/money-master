document.getElementById('calculate-button').addEventListener('click', function () {

      const clothesInput = document.getElementById('clothes-input');
      const clothesAmountText = clothesInput.value;
      const clothesAmount = parseFloat(clothesAmountText);


      const rentInput = document.getElementById('rent-input');
      const rentAmountText = rentInput.value;
      const rentAmount = parseFloat(rentAmountText);

      const foodInput = document.getElementById('food-input');
      const foodAmountText = foodInput.value;
      const foodAmount = parseFloat(foodAmountText);

      const totalCost = clothesAmount + rentAmount + foodAmount

      const totalExpenses = document.getElementById('total-expenses')
      const totalAmountText = totalExpenses.innerText;
      const totalAmount = parseFloat(totalAmountText)
      totalExpenses.innerText = totalAmount + totalCost;

      const incomeInput = document.getElementById('income-input')
      const incomeAmountText = incomeInput.value;
      const incomeAmount = parseFloat(incomeAmountText)
      const totalIncome = incomeAmount - totalCost;
      console.log(totalIncome)

      const balanceTotal = document.getElementById('balance-total')
      const balanceAmountText = balanceTotal.innerText;
      const balanceAmount = parseFloat(balanceAmountText)
      balanceTotal.innerText = balanceAmount + totalIncome;

      clothesInput.value = '';
      rentInput.value = '';
      foodInput.value = '';
      incomeInput.value = '';
})