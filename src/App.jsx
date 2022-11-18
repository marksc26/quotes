import quoteDB from "./db/quotes.json"
import QuoteButton from "./components/QuoteButton"
import QuoteBox from "./components/QuoteBox"
import colors from "./db/colors"
import { useState } from "react"


function App() {

  
  const getRandom = (array) =>{
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quoteDB))
  const [color, setColor] = useState(getRandom(colors))
  
  const getNewValues = () =>{
    const newQuote = getRandom(quoteDB)
    const newColor = getRandmo(colors)
    setQuote(newQuote)
    setColor(newColor)
    
  }

  const backgroundObject ={
    backgroundColor: color
  }

  const colorObject = {
    color:color
  }

  return (
    <div className="App">
      
      <QuoteBox 
      quote={quote} 
      getNewValues={getNewValues}
      backgroundObject={backgroundObject}
      colorObject= {colorObject}/>
    </div>
  )
}

export default App