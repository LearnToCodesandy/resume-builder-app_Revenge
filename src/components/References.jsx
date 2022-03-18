import { useState } from "react";

const References = ({ index, setreferences, references }) => {
  // states
  const [company_name, setcompanyname] = useState("");
  const [company_mail, setcompanymail] = useState("");
  const [compnay_phone, setcompanyphone] = useState("");
  const [btnState, setbtnState] = useState(false);

  // handlers
  const handleReferencesSubmit = () => {
    const references_Data = {
      _index: index,
      _companyname: company_name,
      _compnaymail: company_mail,
      _companyphone: compnay_phone
    };
    setbtnState(true);
    setreferences([references_Data, ...references]);
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
        <span class="input-group-text bg-primary text-white">
          Company's mail
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="abc@def.com"
          onChange={(e) => setcompanymail(e.target.value)}
        />
      </div>
      <div class="input-group m-2 ">
        <span class="input-group-text bg-primary text-white">
          Company's phone
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="(+123) 111 222 3333"
          onChange={(e) => setcompanyphone(e.target.value)}
        />
      </div>
      <button
        className={
          btnState ? "btn btn-success m-2 d-none" : "btn btn-success m-2"
        }
        onClick={handleReferencesSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default References;
