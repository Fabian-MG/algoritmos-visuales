import React from 'react'

import './visual-array.styles.scss'

const VisualArray = ({array, bars}) => {

    const width = bars > 100 ? (bars > 127 ? 8 : 10) : (bars < 50 ? (bars < 30 ? 50 : 30) : 20)
    return (
        <div className="algo-visualizer-container">
        {array.map((arrayBar, idx) => {
          return (
            <div
              key={idx}
              className="bar"
              style={{ width: `${width}px`,height: `${arrayBar}px`, background: '#393b44'
            }}
            />
          );
        })}
      </div>
    )
}

export default VisualArray
