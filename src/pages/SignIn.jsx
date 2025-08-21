import { useNavigate } from "react-router";
import "../css/components/signin.css";
import React from "react";
const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    navigate("/profile", { state: data });
  };

  return (
    <div className="container">
      <div className="page">
        <section className="content content-signin">
          <h2 className="heading">Signin to your PopX account</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <form className="form signin-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="pwd"
                id="pwd"
                placeholder="Enter password"
                required
              />
              <label htmlFor="pwd">Password</label>
            </div>

            <button type="submit" id="submit-btn">
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignIn;