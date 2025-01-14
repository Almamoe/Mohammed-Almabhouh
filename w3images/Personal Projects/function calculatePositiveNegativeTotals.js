function calculatePositiveNegativeTotals(numbers){
    const positiveTotal = numbers.filter(number => number > 0) .reduce((sum, number) => sum + number, 0)
    const negativeTotal = numbers.filter(number => number < 0) .reduce((sum, number) => sum + number , 0)
     return {positive: positiveTotal, negative: negativeTotal}  
 }
 const numbers = [1, -2, 3, -4, 5, -6];
 const totals = calculatePositiveNegativeTotals(numbers);
 console.log(totals);