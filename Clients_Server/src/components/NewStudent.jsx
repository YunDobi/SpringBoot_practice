import React, { useState } from "react";
import StudentService from "../services/StudentService";


const NewStudent = () => {
  const initStudent = {
    name: "",
    email: "",
    dob: "",
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
      dob: student.dob
    };

    StudentService.create(data)
      .then(response => {
        setStudent({
          name: response.data.name,
          email: response.data.email,
          dob: response.data.dob
        });
        setSubmitted(true);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const newStudent = () => {
    setStudent(initStudent);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="bth bth-success" onClick={newStudent}>
            Add
          </button>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="name" style={{marginTop:"20px"}}>name</label>
          <input type="text" className="form-control" id="name" name="name" required value={student.name} onChange={handleInputChange} placeholder="Type the name" />

          <label htmlFor="name" style={{marginTop:"20px"}}>email</label>
          <input type="text" className="form-control" id="email" name="email" required value={student.email} onChange={handleInputChange} placeholder="Type the email" />

          <label htmlFor="name" style={{marginTop:"20px"}}>Date & birth</label>
          <input type="text" className="form-control" id="dob" name="dob" required value={student.dob} onChange={handleInputChange} placeholder="yyyy-mm-dd" />

          <button onClick={saveStudent} className="btn btn-success" style={{marginTop:"20px"}}>
            Submit
          </button>
        </div>
           
      )}

    </div>
  )
};
export default NewStudent;
