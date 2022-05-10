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
  const [ product, setProduct] = useState([]);
  const [ filter, setFilter ] = useState([]);

  useEffect( () => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat ? `http://localhost:5000/api/products${cat}` 
        : "http://localhost:5000/api/products" )
        console.log(response)

      } catch(err) {
        console.log(err)
      }
    }
    getProducts()
  }, [cat])


  useEffect( () => {
    const filterProducts = () => {
      try {

       

      } catch (err) {
        res.status(500).json(err)
      }
    }
  })


  

  return (
    <Container>
        {productData.map( (product) => (
            <Product key={product.id} product={product}/>
        ))}

    </Container>
  )
}

export default Products