import { useRef, useState } from "react";

function Uncontrolled() {
  const nameRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    setMessage(`Hello, ${name}! Welcome to the site.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:{" "}
          <input type="text" ref={nameRef} placeholder="Your name here" />
        </label>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

export default Uncontrolled;
