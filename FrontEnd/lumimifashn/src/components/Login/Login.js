import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../container/redux/apiCalls';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
       rgba( 255, 255, 255, 0.5),
       rgba( 255, 255, 255, 0.5)
  ),
  url("https://img.freepik.com/free-photo/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-near-blue-wall-sunglasses-positive-models-going-crazy-hugging_158538-7650.jpg?w=2000") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 30%;
  background: white;
  padding: 20px;
`

const Title = styled.h1`
  margin: 10px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  min-width: 20%;
  margin: 10px;
  
`
const Button = styled.button`
  margin: 10px;
  width: 40%;
  padding: 14px;
  background-color:  #E110F8;
  color: #F5F5FA;
  cursor: pointer;

  &:disabled {
    color: red;
    cursor: pointer;
  }
`


const Link = styled.div`
  margin: 10px;
  font-size: 14px;
  text-decoration: underline;
  color: #E110F8;
  cursor: pointer;
`




const Login = () => {

  const [ username, setUsername ]  = useState("")
  const [ userPassword, setPassword ]  = useState("")
  const dispatch = useDispatch()

  const { isFetching, error} = useSelector( (state) => state.user ) 


  const SubmitForm = (e) => {
    e.preventDefault()

    login(dispatch, { username, userPassword})
  }

  
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input onChange ={ (event) => setUsername(event.target.value)} placeholder='Username' />
        <Input onChange = { (event) => setPassword(event.target.value) } type="password" placeholder='Password' />
      </Form>
      <Button onClick={SubmitForm} disabled={isFetching} >LOGIN</Button>
      <Link>FORGOTTEN PASSWORD?</Link>
      <Link>CREATE A NEW ACCOUNT</Link>
    </Wrapper>
  </Container>
   
  )
}

export default Login