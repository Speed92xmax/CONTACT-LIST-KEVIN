import React, { useEffect, useState } from "react";
import Contact from "./contact.jsx";
import { useParams } from "react-router";

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState();

  const getContact = async () => {
    await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setContact(json);
      });
  };

  useEffect(() => {
    getContact();
  }, []);
  return <>{contact && <Contact contact={contact} />}</>;
};

export default EditContact;
