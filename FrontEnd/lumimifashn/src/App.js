import Home from "./components/Home/Home";
//import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
//import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div>
      <Login />
    {/* <Cart /> */}
    {/* <Register /> */}
    {/* // <ProductsPage /> */}
    <ProductPage /> 
    <Home/>
    </div>
    
   
  );
}

export default App;
