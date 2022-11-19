
const QuoteButton = ({getNewValues, backgroundObject}) => {
  return (
    <div className="neumo">
        <button onClick={getNewValues} style={backgroundObject}>
        <i  className='bx bx-right-arrow' ></i>
       </button>
    </div>
    
  )
}

export default QuoteButton