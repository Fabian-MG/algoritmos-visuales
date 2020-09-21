import React from 'react'
import {
    Button,
    ButtonGroup,
    Navbar,
  } from "react-bootstrap";
import { ReactComponent as BarGraph } from "../assets/graph.svg";


import './header.component.scss'

const Header = ({handlers: {handleSort, handleReset, handleRange}, range}) => {
    return (
        <Navbar className="navbar" bg="dark" variant="dark">
        <Navbar.Brand className="nav-brand" href="#home">
          <BarGraph className="bar-graph" />
          Algoritmos Visuales
        </Navbar.Brand>

        <ButtonGroup className="btns-algorithms-container">
          <Button className='btn' variant="secondary"  onClick={() => handleSort('bubble')}>
            Bubble
          </Button>
          <Button className='btn' variant="secondary" onClick={() => handleSort('insertion')}>
          Insertion
        </Button>
          <Button className='btn'
            variant="secondary"
            onClick={() => handleSort('merge')}
          >
            Merge
          </Button>
          <Button className='btn' variant="secondary" onClick={() => handleSort('selection')}>
            Selection
          </Button>
        </ButtonGroup>

        
        <input 
            id="typeinp" 
            type="range" 
            min="5" max="200" 
            value={range} 
            onChange={handleRange}
            step="1"
        />
        <Button className='btn' name='generate' variant="outline-info" onClick={handleReset}>
            Generar Arreglo
        </Button>
      </Navbar>
    )
}

export default Header
