import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Announcements/Announcement";
import InfoSection from "../InfoSection/InfoSecton";
import Footer from "../../Footer/Footer";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';





const Container = styled.div`
`
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`
const ImgContainer = styled.div`
  background-color: lightgray;
  flex: 1;
  width: 40%;
 
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 30px;
`
const InfoTitle = styled.h1`
  font-weight: 250;
`
const InfoDesc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-size: 40px;
  font-weight: 200;
  
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 30px;
`
const Filter = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 2  00;
`
const FilterTitle = styled.div`
  
`
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  margin-left: 10px;
  
`
const FilterSizeOption = styled.option`

  
` 
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 8px;
`   



const ChangeProdctNoContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid #781EEA;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 7px;
  
`
const Button = styled.button`
  border: 3px solid #DE1EEA;
  padding: 15px;
  font-size: 15px;
  font-weight: 200;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
      background-color: #B4BBFB
  }
 
`




const ProductPage = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                <Image src='images/ankara.png'/>
              </ImgContainer>
              <InfoContainer>
                  <InfoTitle>Denim Jacket</InfoTitle>
                  <InfoDesc>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type 
                   specimen book. It has survived not only five centuries, but also the leap into 
                   electronic typesetting, remaining essentially unchanged. 
                  </InfoDesc>
                  <Price>$ 20</Price>
                  <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'></FilterColor>
                        <FilterColor color='gray'></FilterColor>
                        <FilterColor color='blue'></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                  </FilterContainer>
                  <ChangeProdctNoContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                  </ChangeProdctNoContainer>
                  
              </InfoContainer>
             
          </Wrapper>
          <InfoSection />
          <Footer />
      </Container>
   
  )
}

export default ProductPage