import React from "react";
import "../css/components/signup.css";
import { useNavigate } from "react-router";
export const SignUp = () => {
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
        <section className="content content-signup">
          <h2 className="heading">Create your PopX account</h2>

          <form className="form signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                required
              />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className="input-group">
              <input
                type="number"
                maxLength={10}
                name="phone"
                id="phone"
                placeholder="Enter your full name"
                required
              />
              <label htmlFor="phone" className="required">
                Phone number
              </label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
              <label htmlFor="email" className="required">
                Email address
              </label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="pwd"
                id="pwd"
                placeholder="Enter your password"
                required
              />
              <label htmlFor="pwd" className="required">
                Password
              </label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="comp-name"
                id="comp-name"
                placeholder="Enter your company name"
                required
              />
              <label htmlFor="comp-name" className="required">
                Company Name
              </label>
            </div>

            <div className="input-group signup-radio">
              <span className="agency-span required">Are you an Agency?</span>

              <div className="radio-btns">
                <div className="radio-btn">
                  <input
                    id="radio-yes"
                    type="radio"
                    name="agency"
                    value={"Yes"}
                    required
                  />
                  <span>Yes</span>
                </div>

                <div className="radio-btn">
                  <input
                    id="radio-no"
                    type="radio"
                    name="agency"
                    value={"No"}
                    required
                  />
                  <span>No</span>
                </div>
              </div>
            </div>

            <button id="create-acc-btn" type="submit">
              Create Account
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
