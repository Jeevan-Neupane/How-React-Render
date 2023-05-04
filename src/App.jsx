import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Navbar from "./Self-Made Components/Navbar"
import UseState from "./Components/UseState/UseState"
import styled from "styled-components"
import UseReducer from "./Components/UseState/UseReducer"
import ObjectUseState from "./Components/Immutable State/ObjectUseState"
import Immutable from "./Self-Made Components/Immutable"
import ArrayUseState from "./Components/Immutable State/Array"
import Parent from "./Components/Parent Child/Parent"
import Parent1 from "./Components/Optimization/Parent1"
import ChildOne from "./Components/Optimization/ChildOne"
import GrandParent from "./Components/Optimization/GrandParent"
import Optimization from "./Self-Made Components/Optimization"
import ParentTwo from "./Components/Optimization/ParentTwo"
import ParentThree from "./Components/Incorrect Optimization/Parent3"
import ParentFour from "./Components/Incorrect Optimization/ParentFour"
import ContextParent from "./Components/Context/ContextParent"



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
        <Route path="child-parent" element={<Parent/>}/>
        <Route path="optimization" element={<Optimization/>}>
          <Route path="prop-pass" element={<GrandParent/>}/>
          <Route path="react-memo" element={<ParentTwo/>}/>
          <Route path="incorrect-optmization" element={<ParentFour />}/>
        </Route>
          <Route path="context" element={<ContextParent/>}/>

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
