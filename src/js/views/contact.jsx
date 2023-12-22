import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const formState = {
  full_name: "",
  email: "",
  agenda_slug: "contact_agenda-2023-2024",
  address: "",
  phone: "",
};

const Contact = ({ contact }) => {
  const [inputValue, setInputValue] = useState(contact || formState);
  const { actions } = useContext(Context);

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <div className="container d-flex justify-content-center h-100">
      <div className="glass my-5 p-4 d-flex flex-column align-items-center gap-3 w-75">
        <h2 className="fw-bold">Create a contact</h2>

        <form action="" className="row w-100 mb-3 ">
          <div className="d-flex flex-column col-12  col-lg-6 mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="full_name"
              value={inputValue.full_name}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="d-flex flex-column col-12  col-lg-6  mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              name="email"
              value={inputValue.email}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="d-flex flex-column col-12  col-lg-6  mb-3">
            <label className="form-label fw-bold">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Country , City , Town"
              name="address"
              value={inputValue.address}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="d-flex flex-column col-12  col-lg-6  mb-3">
            <label className="form-label fw-bold">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="+00 000 00 00"
              name="phone"
              value={inputValue.phone}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="col-12 d-flex justify-content-lg-center w-25">
            {contact ? (
              <button
                onClick={() => actions.updateContact(contact.id, inputValue)}
                className="btn btn-success"
              >
                Edit
              </button>
            ) : (
              <button
                onClick={() => actions.addNewContact(inputValue)}
                className=" w-lg-25 btn btn-success my-4"
              >
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
