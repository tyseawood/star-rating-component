/**
 *  STEP 1: Verify the requirements
 *      - Number of starts flexible
 *      - Hover state
 *      - Reset the star
 *
 *      What is the definition of "done" for this solution.
 *  STEP 2:
 */

import './App.css'
import StarRating from "./StarRating.tsx";
function App() {

  return (
      <>
          <main>
              <StarRating maxRating={10}/>
          </main>
      </>
  )
}

export default App
