import styled from 'styled-components'
import Product from '../Product/Product'
import { productData } from '../../data'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
        {productData.map( (product) => (
            <Product key={product.id} product={product}/>
        ))}

    </Container>
  )
}

export default Products