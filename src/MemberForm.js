import React, { useState } from "react";

import "./App.css";

export default function MemberForm() {
  // Use an object to track multiple fields:
  const [member, setMember] = useState({ name: "", role: "", email: "" });
  const [team, setTeam] = useState([]);

  function handleChange(event) {
    // const updatedUser = { ...team, [event.target.id]: event.target.value };
    // console.log(event.target.value, event.target.name);
    // console.dir(event.target);
    const value = event.target.value;
    const name = event.target.name;
    // console.log("handleChange", event.target.team, value, updatedUser);
    setMember({ ...member, [name]: value });
    console.log(member);
    // setTeam([...team, [name], value]);

    // name: sets the value to the name which is dynamic as seen in your return.
    // in my different inputs i set name=name name=role name=email so thats where name is coming from
    // console.log("team variable", team);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    // team.push(member);
    setTeam([...team, member]);
    console.log("team update", team);
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
                value={member.name}
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
              value={member.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={member.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
      {team.map(member => (
        <div>
          <div>{member.name}</div>
          <div>{member.role}</div>
          <div>{member.email}</div>
        </div>
      ))}
      {/* <div>
        {" "}
        {member.role} {member.email} {member.name}{" "}
      </div> */}
      {/* {member.role}
      {member.email}
      {member.name} */}
      {/* members:{team} */}
    </div>
  );
}

// import React, { useState } from "react";
// export default function Form(props) {
//     return <div>{props.team}</div>
// }
