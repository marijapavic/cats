import React, { useState } from "react"

function App(){
  const [cat, setCat] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)
      fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCat(data)
      })
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false))
    
  }

  return(
    <>
      <div className="nav">
        <button disabled={isLoading} onClick={handleButtonClick}>
        {cat ? "More" : "Cats plz"}
        </button>
      </div>
      {isLoading && <p>They are coming...</p>}
      {cat && cat.map(cat => 
          <div key={cat.id}><img src={cat.url} alt={cat.id} /></div>
      )}
    </>
  )
}

export default App