const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactListUrl:
        "https://playground.4geeks.com/apis/fake/contact/agenda/contact_agenda-2023-2024",

      createUrl: "https://playground.4geeks.com/apis/fake/contact/",

      contactList: [],
    },
    actions: {
      getContactList: async () => {
        const store = getStore();
        const actions = getActions();
        await fetch(store.contactListUrl)
          .then((res) => {
            if (res.status == "404") {
              actions.createNewAgenda().then(() => actions.getContactList());
            }
            return res.json();
          })
          .then((json) => {
            setStore({ contactList: json });
          });
      },

      createNewAgenda: async () => {
        const store = getStore();

        const fetchParams = {
          method: "POST",
          body: JSON.stringify({
            full_name: "",
            email: "",
            agenda_slug: "contact_agenda-2023-2024",
            address: "",
            phone: "",
          }),
          headers: {
            "Content-type": "application/json",
          },
        };

        await fetch(store.createUrl, fetchParams)
          .then((res) => res.json())
          .then((json) => console.log(json));
      },

      addNewContact: async (body, navigate) => {
        const store = getStore();
        await fetch(store.createUrl, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate("/");
        });
      },

      deleteContact: async (id) => {
        const actions = getActions();
        await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((json) => {
            alert(json.msg);
            actions.getContactList();
            console.log(json);
          });
      },

      updateContact: async (id, body) => {
        await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          console.log("el contacto se ha actualizado");
        });
      },
    },
  };
};

export default getState;
