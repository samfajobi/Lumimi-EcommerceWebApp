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
  const [ products, setProducts] = useState([]);
  const [ filterProducts, setFilterProducts ] = useState([]);

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
      setProducts(response.data)
    }
    getProducts()
  }, [cat])


  useEffect( () => {

    cat && setFilterProducts(
      products.filter((item)=> 
      Object
      )
    )
   
  }, [products, cat, filters])



  useEffect( () => {
    const sortProducts = () => {
      try {

      } catch(err) {

      }

    }

    sortProducts()

  })


  

  return (
    <Container>
        {productData.map( (product) => (
            <Product key={product.id} product={product}/>
        ))}

    </Container>
  )
}

export default Products;