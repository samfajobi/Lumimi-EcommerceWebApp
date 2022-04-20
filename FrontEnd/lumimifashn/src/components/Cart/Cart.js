import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Announcement from "../Announcements/Announcement"
import InfoSecton from "../InfoSection/InfoSecton"
import Footer from "../../Footer/Footer"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';




const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 350;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`
const TopButton = styled.button`
  display: flex;
  padding: 15px;
  font-weight: 600;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};

` 



const TopTexts = styled.div`
 
`
const TopText = styled.span`
  
  padding: 0px 10px;
  cursor: pointer;
  font-size: 20px;

`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 300px;
`
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  
  
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => props.color}
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 

`

const ProductAmountContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center; 
  
`
const ProductAmount = styled.div`
  padding: 0px 8px;
  font-size: 25px;
`
const PriceAmount = styled.div`
  font-size: 30px;
  font-weight: 300;
`

const Hr = styled.hr`
  margin: 5px 0px;
  height: 1px;
  background-color: #eee;
  border: none;
`

const Summary = styled.div` 
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;

`

const SummaryTitle = styled.h1`
  display: flex;
  justify-content: center;
`
const SummaryItems = styled.div`
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '600'};
  font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`
  
`
const SummaryItemAmount= styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;

  &:hover {
   
    background-color: gray;
  }
`




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top> 
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Carts(3)</TopText>
              <TopText>Your Wishlists(1)</TopText>
            </TopTexts>
            
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <Image src='/images/newFashImg.png'/>
                  <Details>
                    <ProductName><b>Product:</b> JDees Dior Shoe</ProductName>
                    <ProductId><b>ID:</b> 56565565656 </ProductId>
                    <ProductColor color ='black'/>
                    <ProductSize><b>Size:</b> 67.8</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>3</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <PriceAmount>
                    $ 40
                  </PriceAmount>
                </PriceDetails>
              </Product>
              <Hr></Hr>
              <Product>
                <ProductDetails>
                  <Image src='/images/newFashImg.png'/>
                  <Details>
                    <ProductName><b>Product:</b> JDees Dior Shoe</ProductName>
                    <ProductId><b>ID:</b> 56565565656 </ProductId>
                    <ProductColor color ='gray'/>
                    <ProductSize><b>Size:</b> 67.8</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>3</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <PriceAmount>
                    $ 40
                  </PriceAmount>
                </PriceDetails>
              </Product>
              <Product>
                <ProductDetails>
                  <Image src='/images/newFashImg.png'/>
                  <Details>
                    <ProductName><b>Product:</b> JDees Dior Shoe</ProductName>
                    <ProductId><b>ID:</b> 56565565656 </ProductId>
                    <ProductColor color ='black'/>
                    <ProductSize><b>Size:</b> 67.8</ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>3</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <PriceAmount>
                    $ 40
                  </PriceAmount>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER NOW</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemAmount>$ 100</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems>
                <SummaryItemText>Shipping Fee</SummaryItemText>
                <SummaryItemAmount>$ 10</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems>
                <SummaryItemText>Shipping discount</SummaryItemText>
                <SummaryItemAmount>$ 8</SummaryItemAmount>
              </SummaryItems>  
              <SummaryItems type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemAmount>$ 108</SummaryItemAmount>
              </SummaryItems> 
              <Button>CHECKOUT NOW</Button> 
            </Summary>
          </Bottom>
        </Wrapper>
        <InfoSecton />
        <Footer />
        

    </Container>
  )
}

export default Cart