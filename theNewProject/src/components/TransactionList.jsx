import React from 'react'
import { Link } from "react-router-dom";

function TransactionList({ data, onDelete }) {
  return (
    <div>
      <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title} - ${item.amount} ({item.type})
          <Link to={`/transaction/${item.id}`}>details</Link>{" "}
          <Link to={`/edit/${item.id}`}>edit</Link>{" "}
          <button onClick={() => onDelete(item.id)}>delete</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default TransactionList
