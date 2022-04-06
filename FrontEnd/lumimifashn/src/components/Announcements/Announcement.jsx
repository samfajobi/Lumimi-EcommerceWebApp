import React from 'react'
import styled from 'styled-components';




const Container = styled.div`
  height: 35px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`


const Announcement = () => {
  return (
      <Container>
          Shop Now!!! Hot deal sales available, come sew less and buy less
      </Container>
    
    
  )
}

export default Announcement