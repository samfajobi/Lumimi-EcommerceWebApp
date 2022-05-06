import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Announcement from "../Announcements/Announcement"
import InfoSection from "../InfoSection/InfoSection"
import Footer from "../Footer/Footer"
import Products from "../Products/Products"


const Container = styled.div`

`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

`
const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FilterText = styled.div`
  font-size: 19px;
  font-weight: 500;
`

const Select = styled.select`
  padding: 10px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 500; 
`

const Option = styled.option`
  

`
const ProductsPage = () => {
  return (
      <Container>
          <Navbar />
          <Announcement />
          <Title>Clothes</Title>
          <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
              <Select>
                <Option disabled selected>color</Option>
                <Option>blue</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>yellow</Option>
                <Option>purple</Option>
                <Option>gray</Option>
              </Select>
              <Select>
                <Option disabled selected>size</Option>
                <Option>XL</Option>
                <Option>L</Option>
                <Option>M</Option>
                <Option>XS</Option>
                <Option>S</Option>
              </Select>

            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
              <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products />
          <InfoSection />
          <Footer />
      </Container>
   
  )
}

export default ProductsPage