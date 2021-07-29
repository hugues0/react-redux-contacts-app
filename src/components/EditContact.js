import React from 'react'
import { Link,useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams()
    return (
      <div className="container">
        <div className="display-3 text-center m-5">
          <h1>Edit Contact {id}</h1>
        </div>
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group m-2">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group m-2">
              <input
                type="Email"
                placeholder="Email"
                className="form-control"
              />
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
                value="Update student"
                className="btn btn-dark m-3"
              />
              <Link to="/"
                className="btn btn-danger "
              >Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
}

export default EditContact
