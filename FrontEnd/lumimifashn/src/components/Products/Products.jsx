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
  const [ filteredProducts, setFilteredProducts ] = useState([]);



  useEffect( () => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat ? `http://localhost:5000/api/products?category=${cat}` 
        : "http://localhost:5000/api/products" )
        console.log(response.data)

      } catch(err) {
        console.log(err)
      }
      setProducts(response.data)
    }
    getProducts()
  }, [cat])


   // ReCheck and Understand Well

  useEffect( () => {
    cat && setFilteredProducts(
      products.filter((item)=> 
        Object.entries(filters).every(([key, value]) => 
          item[key].includes(value)
        )
      )
    )
   
  }, [products, cat, filters])



   // ReCheck and Understand well

  useEffect( () => {
    const sortProducts = () => {
      if(( sort === "newest" )) {
        setFilteredProducts( (prev) => {
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        })
      } else if(( sort === "asc")) {
        setFilteredProducts( (prev) => {
          [...prev].sort((a, b) => a.price - b.price)
        })
      } else {
        setFilteredProducts((prev) => {
          [...prev].sort((a, b) => b.price - a.price)
        })
      } 
    }
  })



  

  return (
    <Container>
        { cat ? filteredProducts.map( (product) => (
            <Product key={product.id} product={product}/>
        )) : productData.slice(0,7).map( (product) => (
            <Product key={product.id} product={product}/>))}

    </Container>
  )
}

export default Products;