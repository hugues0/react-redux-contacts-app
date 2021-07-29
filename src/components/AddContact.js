import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory()
  
  console.log(contacts);

  const onSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(contact => contact.email === email && email)
    const checkNumber = contacts.find(
      contact => parseInt(contact.number) === parseInt(number) && number
    );
    if (!name || !email || !number) {
      return toast.warning("please fill all required information");
    }
    if (checkEmail) {
      return toast.error("Email already exists in the database")
    }
    if (checkNumber) {
      return toast.error("Number already exists in the database");
    }
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number
    }
    console.log(data);
    dispatch({type:"ADD_CONTACT", payload: data})
    toast.success("Student successfully added")
    history.push("/")
  };

  return (
    <div className="container">
      <div className="display-3 text-center m-5">
        <h1>Add Contact</h1>
      </div>
      <div className="col-md-6 shadow mx-auto p-5">
        <form onSubmit={onSubmit}>
          <div className="form-group m-2">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="Email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group m-2 mb-4">
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="submit"
              value="Add student"
              className="btn btn-block btn-dark"
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
