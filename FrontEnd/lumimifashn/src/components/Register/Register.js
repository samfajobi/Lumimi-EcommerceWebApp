import styled from "styled-components";


const Container = styled.div` 
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba( 255, 255, 255, 0.6),
    rgba( 255, 255, 255,0.7  )

  ),
  url("https://img.freepik.com/free-photo/fashion-portrait-mix-race-woman-with-brown-skin-curly-african-hairstyle-vivid-pink-background-wearing-silver-winter-jacket-grey-hat_273443-123.jpg?w=2000") center ;
  display: flex;
  justify-content: center;
  align-items: center;
`

 const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background: white;

 `
const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
  margin: 10px;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
 
  
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px;
  
`

const Agreement = styled.div`
  margin: 10px;
`
const Button = styled.button`
  padding: 10px;
  background-color: blue;
  width: 30%;
  color: lightgray;
  margin: 10px;
  cursor: pointer;
`


const Register = () => {
  return (
   <Container>
     <Wrapper>
       <Title>CREATE AN ACCOUNT</Title>
       <Form>
         <Input placeholder='name' />
         <Input placeholder='lastname' />
         <Input placeholder='username' />
         <Input placeholder='email'/>
         <Input placeholder='password'/>
         <Input placeholder='confirm password'/>
         <Agreement> I really do agree to create an account in accordance to <b>Policy</b> </Agreement>
       </Form>
       <Button>CREATE</Button>
     </Wrapper>
   </Container>
  )
}

export default Register