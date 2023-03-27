let family = {
    incomes: [18000, 10000, 1000,5000],
    expenses: [2000.50, 2000, 300.90, 6000,470.99] 
  }


  function sum(array){
    let total = 0;
  
    for(let value of array){
      total += value
    }
    return total
  }


  function calculateBalance(){

    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
  
    const total = calculateIncomes - calculateExpenses

    const itsOK = total >=0
  
    let balanceText = 'negativo'
  
    if(itsOK){
      balanceText = 'positivo'
    }

    console.log(`Seu saldo está ${balanceText} em: R$${total.toFixed(2)}`)

  }

  calculateBalance()