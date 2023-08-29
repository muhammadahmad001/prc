import React, { useState } from "react";

const Question_1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputs = (event) => {
    // Extract the id and value from the input element
    const { id, value } = event.target;

    // Update the state based on the id of the input element
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <div
      className="row  justify-content-center align-items-center"
      style={{
        height: "100vh"
      }}
    >
      <div className="col-5">
        <form
          className="p-3"
          style={{ backgroundColor: "#f6f6f6", borderRadius: "10px" }}
        >
          <h3 className="text-center">Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                handleInputs(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                handleInputs(e);
              }}
            />
          </div>
          <div className="mb-3"></div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question_1;
