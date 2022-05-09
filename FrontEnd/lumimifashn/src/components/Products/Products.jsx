import styled from 'styled-components'
import { useState, useEffect } from "react";
import Product from '../Product/Product'
import { productData } from '../../data'
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`

const Products = ({cat, sort, filters}) => {

  const [ filter, setFilter ] = useState([])

  useEffect( () => {
    const res = axios.get("localhost:5000/api/products")

  }, [])



  
  return (
    <Container>
        {productData.map( (product) => (
            <Product key={product.id} product={product}/>
        ))}

    </Container>
  )
}

export default Products