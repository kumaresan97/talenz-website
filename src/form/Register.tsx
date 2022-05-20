import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";

const Register = () => {
  //const [state, setStae] = useState("");
  // let name, cname1, pass, email;
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   name = event.target.cname.value;
  //   cname1 = event.target.hrname.value;
  //   pass = event.target.pass1.value;
  //   email = event.target.email1.value;
  //   console.log(name, cname1, pass, email);

  // };
  return (
    <div>
      <div className="formsec">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 ">
            <div className="formheader">
              <div className="formcontent">
                <h1>Hire Our Traineees</h1>
                <p>
                  Please provide your details, our HR will touch base with you.
                </p>
              </div>
            </div>
            <div className="formbody">
              <form>
                <p>*required</p>
                <div className="bodycontent">
                  <label>1. company name</label>
                  <span className="star"> *</span>
                  <br />

                  <input
                    type="text"
                    name="cname"
                    id="name"
                    placeholder="enteryour company name"
                  />
                </div>
                <div className="bodycontent">
                  <label>2. HR Name</label>
                  <span className="star"> *</span>
                  <br />

                  <input
                    type="text"
                    name="hrname"
                    placeholder="enteryour company name"
                  />
                </div>
                <div className="bodycontent">
                  <label>3. Emailaddress</label>
                  <span className="star"> *</span>
                  <br />

                  <input
                    type="email"
                    name="email1"
                    placeholder="enteryour company name"
                  />
                </div>
                <div className="bodycontent">
                  <label>4. Contact Numbers</label>
                  <span className="star"> *</span>
                  <br />

                  <input
                    type="password"
                    name="pass1"
                    placeholder="enteryour company name"
                  />
                </div>
                <div className="buttonsec">
                  <button type="submit" className="button">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
