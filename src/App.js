import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [anns, setAnns] = useState([]);

  useEffect(() => {
    console.log("useEffect ran!");
    fetch("http://localhost:8000/api/v1/ann/", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setAnns(data);
      });
  }, []);

  return (
    <>
      <main>Hello, World!</main>
      <div className="container">
        <div className="row">
          {anns?.map((a) => (
            <div className="col-md-3 mb-3" key={a.id}>
              <div className="card bg-dark text-light">
                <div className="card-header p-2">
                  <span className="fw-bold text-info">{a.entity_name}</span>
                  <br />
                  <span className="fw-bold text-warning">{a.department_name}</span>
                </div>
                <div className="card-body p-2">
                  <h2 className="card-title text-info">{a.title}</h2>
                  <span className="fw-bold">{a.start}</span> -<span className="fw-bold">{a.end}</span>
                  <br />
                  <span className="fw-bold">{a.venue}</span>
                  <p className="">{a.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
