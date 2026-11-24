import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function TransactionDetails() {
  var {id} = useParams()
  var [item, setItem] = useState(null)
  useEffect(() => {
    axios.get(`https://6afc9074892984c4494bbc0a.mockapi.io/data/data/${id}`).then((response) => setItem(response.data));
  }, [id]);

  if (!item) return <p>Loading</p>;
  return (
    <div>
    <h2>{item.title}</h2>
      <p>amount: ${item.amount}</p>
      <p>type: {item.type}</p>
      <p>category: {item.category}</p>
      <p>note: {item.note}</p>
      <Link to="/">back</Link>
    </div>
  )
}

export default TransactionDetails
