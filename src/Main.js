import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeComponent from './Home.js'
import AboutUsComponent from './AboutUs.js'
import ContactUsComponent from './ContactUs.js'
import ProjectComponent from './Project.js'
import styled from 'styled-components'

function MainComponent() {

  const DivMain = styled.div`
  min-height:70vh;


  `;

  return (
    <DivMain>
      
      <Routes>
        <Route path="/Home" element={<HomeComponent />}></Route>
        <Route path="/Project" element={<ProjectComponent />}></Route>
        <Route path="/About Us" element={<AboutUsComponent />}></Route>
        <Route path="/Contact Us" element={<ContactUsComponent />}></Route>
        
      </Routes>
      
    </DivMain>
  )
}

export default MainComponent
