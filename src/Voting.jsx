import { useState } from "react";
import "./App.css";

function Voting() {
  const [lan, setLan] = useState([
    { name: "java", votes: 0 },
    { name: "python", votes: 0 },
  ]);

  const vote = (i) => {
    const newLan = [...lan];
    newLan[i].votes++;
    setLan(newLan);
  };

  return (
    <>
      <h1>Voting</h1>
      <div>
        {lan.map((lang, i) => (
          <div key={i} style={{ display: "flex" }}>
            <div>{lang.votes}</div>
            <div>{lang.name}</div>
            <button onClick={() => vote(i)}>Vote</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Voting;
