import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, colorObject}) => {
  return (
    <article cla>
        <p style={colorObject}>{quote.quote}</p>
        <h4 syle={colorObject}>{quote.author}</h4>
        <section className="quoteBox-footer">
            <QuoteButton getNewValues={getNewValues}/>
            <i className="iconos ponlos aqui"></i>
        </section>
        

    </article>
  )
}

export default QuoteBox