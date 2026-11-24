import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddTransaction() {
  var [title,setTitle] = useState("title")
  var [amount,setAmount] = useState(100)
  var [type, setType] = useState("expense");
  var [category,setCategory] = useState("a category")
  var [note,setNote] = useState("mmm")
  var navigate = useNavigate();
  var handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("https://6afc9074892984c4494bbc0a.mockapi.io/data/data",{
      title,
      amount: Number(amount),
      type,
      category,
      note,
    })
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}  />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
      <input placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
      <button type="submit">add</button>
    </form>
    </div>
  )
}

export default AddTransaction
