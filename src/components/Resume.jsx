import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Resume = ({ data }) => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [references, setReferences] = useState([]);

  useEffect(() => {
    setExperiences(data.EmploymentHistory);
    setEducations(data.Education);
    setReferences(data.References);
  }, []);

  return (
    <div className="container">
      <Link to="/">
        <button className="btn btn-primary">Go back</button>
      </Link>
      <hr />
      {/* resume goes here! */}
      <div className="container bg-white text-dark p-3">
        <div class="jumbotron">
          <div class="container text-center my-3">
            <h1>
              {data.FirstName} {data.LastName}
            </h1>
            <p>{data.Profile}</p>
            <div className="container">
              <p>{data.StreetName}</p>
              <p>{data.CityName}</p>
              <p>
                {data.StateName} , {data.PinCode}
              </p>
              <p>Ph : {data.Phone}</p>
              <p>{data.Email}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="container d-flex">
          <section className="container container-left d-flex flex-column">
            <div className="wrapper my-3">
              <h3>Skills</h3>
              <ul className="list-group list-group-flush">
                {data.Skills.map((skill) => (
                  <li className="list-group-item">{skill}</li>
                ))}
              </ul>
            </div>

            <div className="wrapper my-3">
              <h3>Achievements</h3>
              <ul className="list-group list-group-flush">
                {data.Acheivements.map((ach) => (
                  <li className="list-group-item">{ach}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="container container-right d-flex flex-column flex-fill">
            {/* education  */}
            <div className="wrapper my-3">
              <h3>Education</h3>
              <ul className="list-group list-group-flush">
                {educations.map((edu) => (
                  <li className="list-group-item">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title">{edu._schoolname}</h2>
                        <h3 className="card-subtitle mb-2">
                          {edu._studyperiod}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* experience history */}
            <div className="wrapper my-3">
              <h3>
                Experience{" "}
                <span className="badge bg-primary">{data.Experience}</span>
              </h3>
              <ul className="list-group list-group-flush">
                {experiences.map((exp) => (
                  <li className="list-group-item">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title">{exp._companyname}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">
                          {exp._workperiod}
                        </h3>
                        <div className="wrapper my-3">
                          <h4>Activities </h4>
                          <ul class="list-group list-group-flush">
                            {exp._activities.map((act) => (
                              <li class="list-group-item">{act}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* References */}
            <div className="wrapper my-3">
              <h3>References</h3>
              <ul className="list-group list-group-flush">
                {references.map((ref) => (
                  <li className="list-group-item">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="card-title">{ref._companyname}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">
                          {ref._compnaymail}
                        </h3>
                        <h4 className="card-subtitle mb-2 text-muted">
                          {ref._companyphone}
                        </h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
