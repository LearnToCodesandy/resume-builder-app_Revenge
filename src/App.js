import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./components/Form";
import Resume from "./components/Resume";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <div className="container my-3 p-3">
      <h1 className="text-center">Resume Builder</h1>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Form setData={setData} />} />
          <Route path="/preview" element={<Resume data={data} />} />
        </Routes>
      </div>
    </div>
  );
}
