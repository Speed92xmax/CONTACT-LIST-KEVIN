import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ContactListCard from "../component/contactListCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container ">
      <h1 className="my-4 fw-bold ">List agenda</h1>

      {store.contactList.map((element, indx) => {
        return <ContactListCard key={indx} element={element} />;
      })}
    </div>
  );
};
