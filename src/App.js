import React, { useEffect, useState } from "react";

import { getMergeSortAnimations, getBubbleSortAnimations, getSelectionSortAnimations, getInsertionSortAnimations } from "./sort-algorithms/sort-algorithms.utils";
import VisualArray from "./visual-data/visual-array.component";
import Header from "./header/header.component";

import "./App.scss";


const App = () => {
  const [rndArray, setRndArray] = useState([]);
  const [range, setRange] = useState(30)
  const [nBars,setNBars] = useState(30);

  const SPEED = 15;
  const PRIMARY_COLOR = "#43658b";
  const SECONDARY_COLOR = "#931a25";

  useEffect(() => {
    handleReset()
        //eslint-disable-next-line
  },[nBars])

  const seedRandomArray = () => {
    const newArray = [...Array(+nBars)].map(() =>
      Math.floor(Math.random() * 400)
    );
    setRndArray(newArray);
  };

  const handleDisable = (disable) => {
    const buttons = document.getElementsByClassName("btn");
    const rangeInp = document.getElementById('typeinp')
    for(let button of buttons){
      if(button.name !== 'generate') button.disabled = disable
    }
    rangeInp.disabled = disable

  }

  const handleReset = () => {
    seedRandomArray();
    const arrayBars = document.getElementsByClassName("bar");
    for (let bar in arrayBars) {
      
      if(arrayBars[bar].style !== undefined){
      arrayBars[bar].style.background = '#393b44'
      }
    }
    handleDisable(false)
  };

  const handleRange = (e) => {
    setRange(e.target.value)
    setNBars(e.target.value)
  }

  const handleSort = (algorithm) => {
    handleDisable(true)
    switch(algorithm){
      case 'merge':
          mergeSort();
          break;
      case 'bubble':
          bubbleSort();
          break;
      case 'selection':
        selectionSort();
        break;
      case 'insertion':
        insertionSort();
        break;
      default:
        return;
    }
  }

  const mergeSort = ()  => {
      const animations = getMergeSortAnimations(rndArray);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("bar");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * SPEED);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * SPEED);
        }
      } 
  };

  const insertionSort = () => {
    const [animations] = getInsertionSortAnimations(rndArray);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comp1") || (animations[i][0] === "comp2");
        const arrayBars = document.getElementsByClassName('bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
    }
}

  const bubbleSort = () => {
    const [animations] = getBubbleSortAnimations(rndArray);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] === "comp1" || animations[i][0] === "comp2";
        const arrayBars = document.getElementsByClassName('bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            if (barIndex === -1) {
                continue;
            }
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
    }
  }

  const selectionSort = () => {
    const [animations] = getSelectionSortAnimations(rndArray);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comp1") || (animations[i][0] === "comp2");
        const arrayBars = document.getElementsByClassName('bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * SPEED);
        }
        else {
            const [, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * SPEED);  
        }
    }
  }

 

  return (
    <div className="App">
      <Header handlers={{handleSort, handleReset, handleRange}} range={range}/>
      <VisualArray array={rndArray} bars={nBars}/>
    </div>
  );
};

export default App;
