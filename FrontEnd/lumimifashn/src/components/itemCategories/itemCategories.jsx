import styled from 'styled-components'
import ItemCategory from "../ItemCategory/ItemCategory"
import { CategoryData } from '../../data.js'



const Container = styled.div`
  display: flex;
  padding: 20px;

`
const ItemCategories = () => {
  
  return (
      <Container>
        {CategoryData.map( (item) => (
          <ItemCategory key={item.id}  item={item}/>
        ))}

      </Container>
   
  )
}

export default ItemCategories