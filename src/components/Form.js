import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setStatus(!status);
  };
  return (
    <div>
      <>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </>
      <>
        {status && (
          <div>
            username:{username} password:{password}
          </div>
        )}
      </>
    </div>
  );
};

export default Form;
