import React from 'react'
import SearchIcon  from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styled from 'styled-components'
import { Badge } from '@material-ui/core';


const Container = styled.div`
  height: 60px
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: lighgray;
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  padding: 6px;
  margin: 6px;
`

const Input = styled.input`
  border: none;
`
const Search = styled.div`
  font-weight: bold;
  font-size: 18px;
`
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  
`
const MenuItem = styled.div`
  cursor: pointer;
  padding-left: 10px;
  font-size: 17px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Search>Search</Search>
                <SearchContainer>
                    <Input/>
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>
              <Logo>LUMIMI</Logo>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>LOGIN</MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
              </MenuItem>
            </Right>

        </Wrapper>
    </Container>
    
  )
}

export default Navbar