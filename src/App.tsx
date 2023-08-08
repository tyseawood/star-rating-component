import { useState} from "react";
import StarRating from "./StarRating.tsx";
import './App.css'

function App() {
    const [productRating, setProductRating] = useState(0)
  return (
      <>
          <main className={'app'}>
              Current Product Rating: {productRating}
              <StarRating maxRating={5} onChange={setProductRating}/>
          </main>
      </>
  )
}

export default App
