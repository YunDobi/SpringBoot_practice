import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import 'react-table-6/react-table.css';
import { Columns } from './Columns';

export default function BasicTable() {
  const data = axios.get('http://localhost:8080/api/v1/student')
  console.log(data)
}





// export default class BasicTable extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       students: [],
//       loading: true
//     }
//   }

//   async getStudentsData() {
//     const res = axios.get('http://localhost:8080/api/v1/student')
//     console.log((await res).data)
//     this.setState({students: (await res).data, loading: false})
//   }
//   componentDidMount() {
//     this.getStudentsData();
//   }


  

//   render() {
//     return (
//       <ReactTable
//       data={this.state.students}  
//       columns={Columns}  
//    />
//     )
//   }
// }