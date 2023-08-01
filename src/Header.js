import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function HeaderComponent() {

  const Linkelement = styled.div`
  text-align:center;
  color:red;
  border-bottom:2px solid grey;
  `;

  return (
    <Linkelement>
        <h2>React Exercise</h2>
       
        <Link to="/Home">Home</Link>
        <Link to="/Project">Project</Link>
        <Link to="/About Us">About Us</Link>
        <Link to="/Contact Us">Contact Us</Link>
        
      
    </Linkelement>
  )
}

export default HeaderComponent
