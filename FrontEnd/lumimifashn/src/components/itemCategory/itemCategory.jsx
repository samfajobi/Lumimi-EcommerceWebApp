import styled from "styled-components"


const Container = styled.div`
  flex: 1;
  margin: 8px;

`
const Img = styled.img`
  width: 100%;
  
`

const CatInfo = styled.div``
const CatTitle = styled.h1``
const Button = styled.button``

const ItemCategory = ({item}) => {
  return (
    <Container>
      <Img src={item.img}/>
      <CatInfo>
        <CatTitle> {item.title}</CatTitle>
        <Button>SHOP NOW</Button>
      </CatInfo>
        
    </Container>
  )
}

export default ItemCategory