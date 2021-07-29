import React from "react";

const AddContact = () => {
  return (
    <div className="container">
      <div className="display-3 text-center m-5">
        <h1>Add Contact</h1>
      </div>
      <div className="col-md-6 shadow mx-auto p-5">
        <form>
          <div className="form-group m-2">
            <input type="text" placeholder="Name" className="form-control" />
          </div>
          <div className="form-group m-2">
            <input type="Email" placeholder="Email" className="form-control" />
          </div>
          <div className="form-group m-2 mb-4">
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
            />
          </div>
          <div className="form-group m-2">
            <input
              type="submit"
              value="Add student"
              className="btn btn-block btn-dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
