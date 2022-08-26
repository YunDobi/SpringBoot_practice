import axios from 'axios';
import './App.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import React from 'react';
import { Columns } from './components/Columns';


export default class BasicTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      loading: true
    }
  }

  async getStudentsData() {
    const res = axios.get('http://localhost:8080/api/v1/student')
    console.log((await res).data)
    this.setState({students: (await res).data, loading: false})
  }
  componentDidMount() {
    this.getStudentsData();
  }

  render() {
    return (
      <ReactTable  
      data={this.state.students}  
      columns={Columns}  
   />
    )
  }
}