import React from 'react'

const QuoteButton = ({getNewValues, backgroudnObject}) => {
  return (
    <button onClick={getNewValues} style={backgroudnObject}  >
        <i className='pones icono'></i>
    </button>
  )
}

export default QuoteButton