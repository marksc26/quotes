
const QuoteButton = ({getNewValues, backgroundObject}) => {
  return (
    
        <button onClick={getNewValues} style={backgroundObject}>
        <i  className='bx bx-right-arrow' ></i>
       </button>
  
    
  )
}

export default QuoteButton