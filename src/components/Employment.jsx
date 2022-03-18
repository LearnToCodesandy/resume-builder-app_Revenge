import { useState } from "react";

const Employment = ({ index, setemploymenthistory, employmenthistory }) => {
  // states
  const [companyname, setcompanyname] = useState("");
  const [workperiod, setworkperiod] = useState("");
  const [activity, setactivity] = useState("");
  const [activities, setactivities] = useState([]);
  const [empbtn, setempbtn] = useState(false);

  // handlers
  const handleEmploymentSubmit = () => {
    const employment_data = {
      _index: index,
      _companyname: companyname,
      _workperiod: workperiod,
      _activities: activities
    };
    setempbtn(true);
    setemploymenthistory([employment_data, ...employmenthistory]);
  };

  return (
    <div className="details-wrapper container my-5">
      <hr />

      <div className="wrapper d-flex justify-content-between my-3">
        <span className="badge pill bg-primary mx-2">{index}</span>
      </div>

      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">
          Company's Name
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="company's name"
          onChange={(e) => setcompanyname(e.target.value)}
        />
      </div>
      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">Work Period</span>
        <input
          type="text"
          class="form-control"
          placeholder="work period"
          onChange={(e) => setworkperiod(e.target.value)}
        />
      </div>
      <div className="wrapper">
        <div className="input-group m-2">
          <input
            type="text"
            className="form-control"
            placeholder="add activities you are involved in"
            value={activity}
            onChange={(e) => {
              setactivity(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setactivities([activity, ...activities]);
              setactivity("");
            }}
          >
            Add work activities
          </button>
        </div>
        <div className="pills-wrapper m-2">
          {activities.map((act) => {
            return (
              <span className="badge mx-1 rounded-pill bg-primary">{act}</span>
            );
          })}
        </div>
      </div>
      <button
        className={
          empbtn ? "btn btn-success m-2 d-none" : "btn btn-success m-2"
        }
        onClick={handleEmploymentSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Employment;
