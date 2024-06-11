import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './cars.css'
const Cars = () => {
  const [users,setUsers] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`).then(response=>{
      setUsers(response.data)
    })
  },[page, limit])


  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className='users'>
      <h1 className='text-center my-3'>Users</h1>
      <div className="row">
        <div className="col-md-4">
          <select onChange={(e)=>setLimit(e.target.value)} className="form-control my-2">
            <option value="" selected>Select limit</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Username</th>
          <th>Addess</th>
          <th>Company name</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.address.city}</td>
            <td>{item.company.name}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
     <div className="d-flex justify-content-center my-3 buttons">
        <button className="btn btn-primary mx-2" onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <p className="my-auto">{page}</p>
        <button className="btn btn-primary mx-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Cars

