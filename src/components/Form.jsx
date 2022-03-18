import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Employment from "./Employment";
import EducationSection from "./EducationSection";
import References from "./References";

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Form = ({ setData }) => {
  // states
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [streetname, setstreename] = useState("");
  const [cityname, setcityname] = useState("");
  const [statename, setstatename] = useState("");
  const [pincode, setpincode] = useState("");
  const [profile, setprofile] = useState("");
  const [experience, setexperience] = useState(0);
  const [skills, setskills] = useState([]);
  const [skill, setskill] = useState("");
  const [hobbies, sethobbies] = useState([]);
  const [hobby, sethobby] = useState("");
  const [employmenthistory, setemploymenthistory] = useState([]);
  const [historycounts, sethistorycounts] = useState([]);
  const [deletedhistorycounts, setdeletedhistorycounts] = useState([]);
  const [references, setreferences] = useState([]);
  const [referencecounts, setreferencecounts] = useState([]);
  const [deletedreferencecounts, setdeletedreferencecounts] = useState([]);
  const [education, seteducation] = useState([]);
  const [educationcounts, seteducationcounts] = useState([]);
  const [deletededucationcounts, setdeletededucationcounts] = useState([]);
  const [continueactivate, setcontinueactivate] = useState(false);

  // handlers

  const handleToggle = () => {
    if (
      firstname.length &&
      lastname.length &&
      email.length &&
      phone.length &&
      streetname.length &&
      cityname.length &&
      statename.length &&
      profile.length &&
      experience.length
    ) {
      setcontinueactivate(true);
    }
  };

  useEffect(() => {
    handleToggle();
  }, [
    firstname,
    lastname,
    email,
    phone,
    streetname,
    cityname,
    statename,
    profile,
    experience
  ]);

  const handleSubmit = () => {
    const final_data = {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Phone: phone,
      StreetName: streetname,
      CityName: cityname,
      StateName: statename,
      PinCode: pincode,
      Profile: profile,
      Experience: experience,
      Skills: skills,
      Acheivements: hobbies,
      EmploymentHistory: employmenthistory,
      References: references,
      Education: education
    };
    setData(final_data);
  };

  return (
    <div className="container">
      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">First Name *</span>
        <input
          type="text"
          class="form-control"
          placeholder="first name"
          onChange={(e) => setfirstname(e.target.value)}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text bg-primary text-white">Last Name *</span>
        <input
          type="text"
          class="form-control"
          placeholder="last name"
          onChange={(e) => setlastname(e.target.value)}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text bg-primary text-white">
          Email Address *
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="example@abc.com"
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div class="input-group m-2">
        <span class="input-group-text bg-primary text-white">Phone No: *</span>
        <input
          type="text"
          class="form-control"
          placeholder="(+123) 111 222 3333"
          onChange={(e) => setphone(e.target.value)}
        />
      </div>

      <div className="wrapper">
        <label htmlFor="address" className="text-white mx-2 my-1">
          Address *
        </label>
        <div class="input-group m-2">
          <input
            type="text"
            placeholder="street name"
            class="form-control"
            onChange={(e) => setstreename(e.target.value)}
          />
          <input
            type="text"
            placeholder="city name"
            class="form-control"
            onChange={(e) => setcityname(e.target.value)}
          />
          <input
            type="text"
            placeholder="state name"
            class="form-control"
            onChange={(e) => setstatename(e.target.value)}
          />
          <input
            type="number"
            placeholder="pincode"
            class="form-control"
            onChange={(e) => setpincode(e.target.value)}
          />
        </div>
      </div>

      <div class="input-group m-2">
        <span class="input-group-text bg-primary text-white">Profile *</span>
        <textarea
          class="form-control"
          placeholder="express your strengths and motive to work"
          onChange={(e) => setprofile(e.target.value)}
        ></textarea>
      </div>

      <div class="input-group m-2">
        <span class="input-group-text bg-primary text-white">Experience *</span>
        <input
          type="number"
          class="form-control"
          placeholder="4 years"
          onChange={(e) => setexperience(e.target.value)}
        />
      </div>

      <div className="wrapper">
        <div class="input-group m-2">
          <input
            type="text"
            class="form-control"
            placeholder="add skills you posses"
            value={skill}
            onChange={(e) => {
              setskill(e.target.value);
            }}
          />
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              const updated_skills = [skill, ...skills];
              setskills(updated_skills);
              setskill("");
            }}
          >
            Add Skills
          </button>
        </div>
        <div className="pills-wrapper m-2">
          {/* display skills  */}
          {skills.map((skill) => (
            <span
              className="badge mx-1 rounded-pill bg-primary"
              key={Math.random() * 10000}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <div class="input-group m-2">
          <input
            type="text"
            class="form-control"
            placeholder="add your achievements..."
            value={hobby}
            onChange={(e) => {
              sethobby(e.target.value);
            }}
          />
          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              const updated_hobbies = [hobby, ...hobbies];
              sethobbies(updated_hobbies);
              sethobby("");
            }}
          >
            Add Acheivements
          </button>
        </div>
        <div className="pills-wrapper m-2">
          {/* display skills  */}
          {hobbies.map((hobb) => (
            <span
              className="badge mx-1 rounded-pill bg-primary"
              key={Math.random() * 10000}
            >
              {hobb}
            </span>
          ))}
        </div>
      </div>

      <div className="section-wrapper">
        <div className="d-flex align-items-center justify-content-between my-3">
          <span className="m-2 text-white my-1">Employment History</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              sethistorycounts([makeid(7), ...historycounts]);
            }}
          >
            Add Employment History
          </button>
        </div>
        {historycounts.map((randomID, index) => (
          <Employment
            index={randomID}
            setemploymenthistory={setemploymenthistory}
            employmenthistory={employmenthistory}
          />
        ))}
      </div>

      <div className="section-wrapper">
        <div className="d-flex align-items-center justify-content-between my-3">
          <span className="m-2 text-white my-1">Education</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              seteducationcounts([makeid(7), ...educationcounts]);
            }}
          >
            Add Education
          </button>
        </div>
        {educationcounts.map((randomID, index) => (
          <EducationSection
            index={randomID}
            setEducation={seteducation}
            education={education}
          />
        ))}
      </div>

      <div className="section-wrapper">
        <div className="d-flex align-items-center justify-content-between my-3">
          <span className="m-2 text-white my-1">References</span>
          <button
            className="btn btn-primary"
            onClick={() => setreferencecounts([makeid(7), ...referencecounts])}
          >
            Add Reference
          </button>
        </div>
        {referencecounts.map((randomID, index) => (
          <References
            index={randomID}
            setreferences={setreferences}
            references={references}
          />
        ))}
      </div>
      <Link
        to="/preview"
        className={
          continueactivate
            ? "btn btn-success m-2"
            : "btn btn-success m-2 disabled"
        }
      >
        <button type="button" className="btn" onClick={handleSubmit}>
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Form;
