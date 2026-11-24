import React from 'react'

function SummaryCards({data}) {
  var income = data.filter((item) => item.type === "income" ).reduce((sum,item) => sum + Number(item.amount),0)
  var expense = data.filter((item) => item.type === "expense").reduce((sum,item)=> sum + Number(item.amount),0)
  return (
   <div>
      <p>income: {income}</p>
      <p>expense: {expense}</p>
      <p>balance: {income - expense}</p>
    </div>
  )
}

export default SummaryCards
