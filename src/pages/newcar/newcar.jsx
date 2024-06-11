import { useState } from "react";
import { nanoid } from "nanoid";
import UserModal from "../../components/modal";
import { NavLink } from "react-router-dom";

const Newcar = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);

  const deleteCar = (id) => {
    setCars((prevCars) => prevCars.filter((cars) => cars.id !== id));
  };

  const startEditing = (id) => {
    const carToEdit = cars.find((cars) => cars.id === id);
    setCurrentCar(carToEdit);
    setIsEditing(true);
    setModal(true);
  };

  const editCar = (editedCar) => {
    setCars((prevCars) =>
      prevCars.map((cars) => (cars.id === editedCar.id ? editedCar : cars))
    );
  };

  const addCar = (newCar) => {
    newCar.id = nanoid();
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <>
      <UserModal
        open={modal}
        toggle={() => {
          setModal(false);
          setIsEditing(false);
          setCurrentCar(null);
        }}
        cars={cars}
        setCars={setCars}
        editCar={editCar}
        addCar={addCar}
        isEditing={isEditing}
        currentCar={currentCar}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setModal(true);
                    setIsEditing(false);
                    setCurrentCar(null);
                  }}
                >
                  {isEditing ? "Edit Car" : "Add Car"}
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <td>T/R</td>
                <td>Name</td>
                <td>Price</td>
                <td>Year</td>
                <td>Color</td>
                <td>Brand</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cars
                .filter((item) => {
                  if (search === "") return true;
                  return item.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>{item.brand}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          onClick={() => startEditing(item.id)}
                          className="btn btn-warning"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          onClick={() => deleteCar(item.id)}
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        {/* <NavLink
                          to={`/main/single-car/${item.id}`}
                          className="btn btn-primary"
                        >
                          <span>
                            <i className="fa-solid fa-eye"></i>
                          </span>
                        </NavLink> */}
                        <button className="btn btn-primary">
                        <i className="fa-solid fa-eye"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Newcar;