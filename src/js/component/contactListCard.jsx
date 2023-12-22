import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactListCard = ({ element }) => {
  const { actions } = useContext(Context);
  const num = Math.floor(Math.random() * 10);
  const imgUrl = `https://i.pravatar.cc/30${num}`;

  return (
    <div className="card mb-3 p-4 glass">
      <div className="row align-items-start ">
        <div className="col-md-3 h-100 d-flex justify-content-center ">
          <img
            src={imgUrl}
            className="img-fluid rounded-circle img-avatar "
            alt="..."
          />
        </div>
        <div className="col-md-7 h-100 p-0">
          <div className="card-body d-flex flex-column ">
            <h2 className="card-title mb-4 fw-bold">{element.full_name}</h2>
            <div className="mb-2">
              <span className="fw-bold">Email: </span>
              {element.email}
            </div>
            <div className="mb-2">
              <span className="fw-bold">Address: </span>
              {element.address}
            </div>
            <div className="mb-2">
              <span className="fw-bold">Phone: </span>
              {element.phone}
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column gap-3 align-self-center">
          <button
            onClick={() => actions.deleteContact(element.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <Link to={`/edit/${element.id}`}>
            <button className="btn btn-warning w-100">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactListCard;
