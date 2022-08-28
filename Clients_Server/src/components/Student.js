import React, { useState } from "react";
import StudentService from "../services/StudentService";


const UpdateStudent = (id) => {
  const initStudent = {
    id: id,
    name: "",
    email: "",
  };
  const [student, setStudent] = useState(initStudent);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };
  const saveStudent = () => {
    var data = {
      name: student.name,
      email: student.email,
    };

    StudentService.update(id, data.name, data.email )
      .then(response => {
        setStudent({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        });
        setSubmitted(true);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const UpdateStudent = () => {
    setStudent(initStudent);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You editted successfully!</h4>
          <button className="bth bth-success" onClick={UpdateStudent}>
            Add
          </button>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="name" style={{marginTop:"20px"}}>name</label>
          <input type="text" className="form-control" id="name" name="name" required value={student.name} onChange={handleInputChange} placeholder="Type the name" />

          <label htmlFor="name" style={{marginTop:"20px"}}>email</label>
          <input type="text" className="form-control" id="email" name="email" required value={student.email} onChange={handleInputChange} placeholder="Type the email" />

          <button onClick={saveStudent} className="btn btn-success" style={{marginTop:"20px"}}>
            Submit
          </button>
        </div>
           
      )}

    </div>
  )
};
export default UpdateStudent;
