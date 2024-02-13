import { useState } from 'react'
import Navbar from './components/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import SearchLayout from './layouts/SearchLayout'
library.add(faMagnifyingGlass)

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='search' element={<SearchLayout/>}/>
    </Route>
    
  )
)

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App
