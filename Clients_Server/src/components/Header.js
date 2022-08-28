import axios from 'axios'
import React from 'react'

export const Header = () => {

  axios.post('http://localhost:8080/api/v1/student/')

  return (
    <div style={{margin: "10px"}}>
      <button>Create</button>
      Header
    </div>
  )
}
