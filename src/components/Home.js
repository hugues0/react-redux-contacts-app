import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  const deleteContact = (id) =>{
    dispatch({type:"DELETE_CONTACT",payload:id});
    toast.success("Contact successfully deleted")
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-left">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-8 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr className="text-center" key={id}>
                  <td>{contact.id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary m-2"
                    >
                      Edit
                    </Link>
                    <button type="button" className="btn btn-small btn-danger" onClick={()=>deleteContact(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
