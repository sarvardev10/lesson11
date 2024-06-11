import React, { useEffect, useState } from "react";
import axios from "axios";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(2)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`).then((response) => {
      console.log(response);
      setAlbums(response.data);
    });
  }, [page, limit]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="albums">
      <h1 className="text-center my-3">Albums</h1>
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
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>AlbumId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
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
  );
};

export default Albums;
