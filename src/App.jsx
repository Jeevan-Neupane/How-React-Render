import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Navbar from "./Self-Made Components/Navbar"
import UseState from "./Components/UseState/UseState"
import styled from "styled-components"
import UseReducer from "./Components/UseState/UseReducer"
import ObjectUseState from "./Components/Immutable State/ObjectUseState"
import Immutable from "./Self-Made Components/Immutable"
import ArrayUseState from "./Components/Immutable State/Array"



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
        <Route path="immutable-state" element={<Immutable/>}>
          <Route path="object" element={<ObjectUseState/>}/>
          <Route path="array" element={<ArrayUseState/>}/>

        </Route>

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
