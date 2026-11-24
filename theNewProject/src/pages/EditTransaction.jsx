import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function EditTransaction() {
  var { id } = useParams();
  var navigate = useNavigate();
    var [title,setTitle] = useState("title")
    var [amount,setAmount] = useState(100)
    var [type, setType] = useState("expense");
    var [category,setCategory] = useState("a category")
    var [note,setNote] = useState("mmm")
  useEffect(() => {
    axios.get(`https://6afc9074892984c4494bbc0a.mockapi.io/data/data/${id}`).then((response) => {
      setTitle(response.data.title);
      setAmount(response.data.amount);
      setType(response.data.type);
      setCategory(response.data.category);
      setNote(response.data.note || "");
    });
  }, [id]);

  var handleUpdate = async (e) => {
    e.preventDefault()
    await axios.put(`https://6afc9074892984c4494bbc0a.mockapi.io/data/data/${id}`,{
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
      <form onSubmit={handleUpdate}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <button type="submit">save</button>
    </form>
    </div>
  )
}

export default EditTransaction
