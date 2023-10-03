import React from 'react'


const Dash=()=>{
    const expenses = [
        {"name":"Expense","subName":"Life style","mony":"50","time":"2023-06-03T13:38:19+05:00"},
        {"name":"Expense","subName":"Life style","mony":"50","time":"2023-07-03T13:38:19+05:00"},
        {"name":"Expense","subName":"Life style","mony":"70","time":"2023-08-03T13:38:44+05:00"},
      ];
      
      const incomes = [
        {"name":"Incom","subName":"Salary","mony":"400","time":"2023-06-03T13:42:23+05:00"},
        {"name":"Incom","subName":"Gift","mony":"100","time":"2023-07-03T13:43:04+05:00"},
        {"name":"Incom","subName":"Refunds","mony":"200","time":"2023-08-03T14:35:29+05:00"},
      ];

      

      const calculateDailyDifference = (expenses : any, incomes : any) => {
        const expenseMap = expenses.reduce((map : any, expense: any) => {
          const date = new Date(expense.time).toISOString().split('T')[0];
          const amount = parseInt(expense.mony);
      
          map[date] = (map[date] || 0) + amount;
          return map;
        }, {});
      
        const incomeMap = incomes.reduce((map: any, income : any) => {
          const date = new Date(income.time).toISOString().split('T')[0];
          const amount = parseInt(income.mony);
      
          map[date] = (map[date] || 0) + amount;
          return map;
        }, {});
      
        const dates = Array.from(new Set([...Object.keys(expenseMap), ...Object.keys(incomeMap)]));

      
        const dailyDifference = dates.map((date) => {
          const expenseAmount = expenseMap[date] || 0;
          const incomeAmount = incomeMap[date] || 0;
          const difference = incomeAmount - expenseAmount;
      
          return { date, difference };
        });
      
        return dailyDifference;
      };
      
      const dailyDifference = calculateDailyDifference(expenses, incomes);

      console.log("daily",dailyDifference)
      
      return(


<div>ki hall hai</div>

      )

}

export default Dash