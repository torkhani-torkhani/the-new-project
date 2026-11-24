import React from 'react'

function FilterBar({ search, onSearchChange, f, onTypeChange }) {


  return (
    <div>
      <input type="text"
      placeholder='search'
      value={search}
      onChange={onSearchChange}
       />
       <select value={f} onChange={onTypeChange}>
        <option value="">All in  a data</option>
        <option value="income">income</option>
        <option value="expense">expense</option>
      </select>
    </div>
  )
}

export default FilterBar
