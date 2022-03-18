import { useState } from "react";

const EducationSection = ({ index, setEducation, education }) => {
  // states
  const [schoolname, setschoolname] = useState("");
  const [studyperiod, setstudyperiod] = useState("");
  const [edubtnState, setedubtnState] = useState(false);
  // handlers
  const handleEducationSubmit = () => {
    const education_data = {
      _index: index,
      _schoolname: schoolname,
      _studyperiod: studyperiod
    };
    setedubtnState(true);
    setEducation([education_data, ...education]);
  };

  return (
    <div className="details-wrapper container my-5">
      <hr />
      <div className="wrapper d-flex justify-content-between my-3">
        <span className="badge pill bg-primary mx-2">{index}</span>
      </div>

      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">School Name</span>
        <input
          type="text"
          class="form-control"
          placeholder="school name"
          onChange={(e) => setschoolname(e.target.value)}
        />
      </div>
      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">Study Period</span>
        <input
          type="text"
          class="form-control"
          placeholder="Study period"
          onChange={(e) => setstudyperiod(e.target.value)}
        />
      </div>
      <button
        className={
          edubtnState ? "btn btn-success m-2 d-none" : "btn btn-success m-2"
        }
        onClick={() => handleEducationSubmit(index)}
      >
        Submit
      </button>
    </div>
  );
};

export default EducationSection;
