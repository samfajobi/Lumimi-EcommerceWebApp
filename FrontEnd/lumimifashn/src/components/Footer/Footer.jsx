import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
 
`

const LogoPart = styled.div`
  flex: 1;
`
const Logo = styled.h1``
const Desc = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 16px;
  text-align: justify;
`
const LogoIcons = styled.div` 
  display: flex;

  
`
const LgIcon1 = styled.div`
  background-color: #072D97;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

`
const LgIcon2 = styled.div`
    background-color: #10BD05;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`
const LgIcon3 = styled.div`
    background-color: #EA1ECF;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`
const LgIcon4 = styled.div`
    background-color: #EA391E;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Links = styled.div`
  flex: 1
`

const LnkTitle = styled.h5`
`

const Ul = styled.ul`
  
`

const Li = styled.li`
`

const Contact = styled.div` 
  flex: 1
`

const ContTitle = styled.div`
  
`

const Address1 = styled.div`
  display: flex;
`
const Address2 = styled.div`
  display: flex;
`
const Address3 = styled.div`
  display: flex;
`
const Address = styled.div``
const AddrsIcon1 = styled.div``
const AddrsIcon2 = styled.div``
const AddrsIcon3 = styled.div``


const Footer = () => {
  return (
    <Container>
        <LogoPart>
            <Logo>LUMIMI.</Logo>
            <Desc>TK Query is built on top of the Redux Toolkit core for
                its implementation, using Redux internally for its architecture.
                Although knowledge of Redux and RTK are not required to use RTK Query,
                you should explore
                all of the additional global store management capabilities they provide,
            </Desc>
            <LogoIcons>
                <LgIcon1><FacebookIcon /></LgIcon1>
                <LgIcon2><TwitterIcon /></LgIcon2>
                <LgIcon3><InstagramIcon /></LgIcon3>
                <LgIcon4><PinterestIcon /></LgIcon4>
            </LogoIcons>   
        </LogoPart>

        <Links>
          <LnkTitle>Useful Links</LnkTitle>
          <Ul>
              <Li>Home</Li>
              <Li>Home</Li>
              <Li>Home</Li>
              <Li>Home</Li>
              <Li>Home</Li>
          </Ul>
        </Links>

        <Contact>
            <ContTitle>Contact</ContTitle>
            <Address1>
                <AddrsIcon1><LocationOnIcon /></AddrsIcon1>
                <Address>23,off Akoka road, Yaba Lagos</Address>
            </Address1>
            <Address2>
                <AddrsIcon2><CallIcon /></AddrsIcon2>
                <Address>8153382359, 09045666888</Address>
            </Address2>
            <Address3>
                <AddrsIcon3><MailOutlineIcon /></AddrsIcon3>
                <Address>info@segfaj.email.com</Address>
            </Address3>

        </Contact>

    </Container>
  )
}

export default Footer