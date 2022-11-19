import QuoteButton from "./QuoteButton"


const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {
  return (
    <article className="quoteBox">
        <p style={colorObject}>{quote.quote}</p>
        <h4 style={colorObject}>{quote.author}</h4>
        <section className="quoteBox-footer">
          <div className="quoteBox-Button">
            <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
          </div>
        </section>
        <i style={colorObject} className='bx bxs-quote-alt-left'></i>

    </article>
  )
}

export default QuoteBox