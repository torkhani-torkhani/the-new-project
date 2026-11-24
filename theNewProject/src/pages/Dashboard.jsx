
import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryCards from "../components/SummaryCards";
import FilterBar from "../components/FilterBar";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  var [data,setData] = useState([])
  var [state,setSearch] = useState("");
  var [f,setTypeFilter] = useState("")
  useEffect(() => {
    var fetchData = async () =>{
      try{
       var response = await axios.get("https://6afc9074892984c4494bbc0a.mockapi.io/data/data")
        setData(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])
  var handleDelete = async (id) =>{
    try{
      await axios.delete(`https://6afc9074892984c4494bbc0a.mockapi.io/data/data/${id}`)
      var changed = data.filter((item) => item.id !== id)
      setData(changed)
    }
    catch(error){
      console.log("errors with a handle delete", error)
    }
  }

  var wayTofiltredData = data.filter((item) =>{
    var testing = 
    item.title.toLowerCase().includes(state.toLowerCase()) ||
    item.category.toLowerCase().includes(state.toLowerCase());
    var AmatchesType = true
    if(f !== ""){
      AmatchesType = item.type === f
    }
    return testing && AmatchesType
  })
  return (
    <div>
      <h2>dash board</h2>
      <SummaryCards data={data} />
     <FilterBar
        search={state}
        onSearchChange={(e) => setSearch(e.target.value)}
        f={f}
        onTypeChange={(e) => setTypeFilter(e.target.value)}
      />
  <TransactionList data={wayTofiltredData} onDelete={handleDelete} />
    </div>
  )
}

export default Dashboard
