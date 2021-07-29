import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  const history = useHistory()
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(()=>{
    if(currentContact){
      setName(currentContact.name)
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
    
  },[currentContact])

  const onSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) && number
    );
    if (!name || !email || !number) {
      return toast.warning("please fill all required information");
    }
    if (checkEmail) {
      return toast.error("Email already exists in the database");
    }
    if (checkNumber) {
      return toast.error("Number already exists in the database");
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    console.log(data);
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student updated successfully");
    history.push("/");
    
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="display-3 text-center m-5">
            <h1>Edit Contact {id}</h1>
          </div>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={onsubmit}>
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
                  value="Update student"
                  className="btn btn-dark m-3"
                  onClick={onSubmit}
                />
                <Link to="/" className="btn btn-danger ">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          No student with ID number {id} found
        </h1>
      )}
    </div>
  );
};

export default EditContact;
