import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Navbar from "./Self-Made Components/Navbar"
import UseState from "./Components/UseState/UseState"
import styled from "styled-components"
import UseReducer from "./Components/UseState/UseReducer"


const Container=styled.div`
width:100%;
background-color:lightblue;
height:100vh;


`



function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar/>} >
        <Route path="use-state" element={<UseState/>}/>
        <Route path="use-reducer" element={<UseReducer/>}/>

      </Route>

    )
  )

  

  return (
    <Container>
    
 
      <RouterProvider router={router}/>

    </Container>



  // <Navbar/>
  )
}

export default App
