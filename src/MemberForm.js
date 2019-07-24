import React, { useState } from "react";

import "./App.css";

export default function MemberForm() {
  // Use an object to track multiple fields:
  const [team, setTeam] = useState({ name: "", role: "", email: "" });
  const [member, setMember] = useState([]);

  function handleChange(event) {
    // const updatedUser = { ...team, [event.target.id]: event.target.value };
    // console.log(event.target.value, event.target.name);
    // console.dir(event.target);
    const value = event.target.value;
    const name = event.target.name;
    // console.log("handleChange", event.target.team, value, updatedUser);
    setTeam({ ...team, [name]: value });
    // name: sets the value to the name which is dynamic as seen in your return
    // console.log("team variable", team);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <fieldset>
          <legend>Signup</legend>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={team.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              className="form-control"
              name="role"
              placeholder="Enter Your Role"
              value={team.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={team.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
      {/* members:{team} */}
    </div>
  );
}

// import React, { useState } from "react";
// export default function Form(props) {
//     return <div>{props.team}</div>
// }
