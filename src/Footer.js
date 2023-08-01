import React from 'react'
import styled from 'styled-components'

function FooterComponent() {

  const DivFooter = styled.p`
  color:Blue;
  text-align:center;
  border-top:2px solid grey;
  `;

  return (
    <DivFooter>
      Footer
    </DivFooter>
  )
}

export default FooterComponent
