
import './App.css';
import React, { Component } from 'react'
import Navbar from './compoents/Navbar';
import Newscomp from './compoents/Newscomp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div> 
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Newscomp Pagesize={12} key="sports" category="sports" country="in"/>}></Route>
        <Route path="/technology" element={<Newscomp Pagesize={12} key="technology" category="technology" country="in"/>}></Route>
        <Route path="/science"element={<Newscomp Pagesize={12} key="Science" category="science" country="in"/>}/>
        <Route path="/sports" element={<Newscomp Pagesize={12} key="Sports" category="sports" country="in"/>}/>
        <Route path="/entertainment" element={<Newscomp Pagesize={12} key="Entertainment" category="entertainment" country="in"/>}/>
        <Route path="/bussiness" element={<Newscomp Pagesize={12} key="Bussiness" category="bussiness" country="in"/>}/>
        <Route path="/general" element={<Newscomp Pagesize={12} key="General" category="general" country="in"/>}/>
       </Routes>
       </Router>
      </div>
    )
  }
}

