import React, { useState, useEffect, useMemo, useRef } from "react";
import StudentService from "../services/StudentService";
import {useTable} from "react-table";
import {useNavigate, Navigate, Link} from 'react-router-dom';
import { render } from "@testing-library/react";



const StudentList = (props) => {
  const [students, setStudents] = useState([]);
  let navigate = useNavigate();
  const studentsRef = useRef();
  studentsRef.current = students;

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    StudentService.getAll()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  

  const EditStudent = (rowIndex) => {
    
    const id = studentsRef.current[rowIndex].id;
    console.log(id)
    navigate("/"+id);
  };


  const deleteStudent = (rowIndex) => {
    const id = studentsRef.current[rowIndex].id;
    StudentService.remove(id)
      .then((response) => {
        let newStudent = [...studentsRef.current];
        newStudent.splice(rowIndex, 1);
        setStudents(newStudent);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //-------------------------------------------------------------------------------
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "NAME",
        accessor: "name"
      },
      {
        Header: "EMAIL",
        accessor: "email"
      },
      {
        Header: "DATE & BIRTH",
        accessor: "dob"
      },
      {
        Header: "AGE",
        accessor: "age"
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span style={{margin:"0 10px"}} onClick={() => {EditStudent(rowIdx)}}>
                <i className="far fa-edit action mr-2"></i>
              </span>
              <span onClick={() => deleteStudent(rowIdx)} style={{margin:"0 10px"}}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        }
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: students,
  });

  return (
    <div className="list row">
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StudentList;