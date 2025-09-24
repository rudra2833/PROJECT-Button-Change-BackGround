import { useState,useEffect} from 'react'

function App() {
  const [color, changeColor] = useState("black");

  const colorCode = ["red", "orange", "yellow", "green", "blue", "purple", "brown"];

    useEffect(()=>{
      return console.log("Change to new server!!")
    },[color])

  function handleClick(e){
    changeColor(e.target.id)
  }

  return (
    <>
    <div style={{backgroundColor:color}} className="w-full h-screen duration-200 grid gap-y-20 justify-center items-center">
      <div className="flex justify-center items-center">
      <h1 style={{color:"white"}}>Change Background!</h1>
      </div>

      <div className="flex flex-row justify-center">
        {colorCode.map((ele)=>{
          return <button id={ele} style={{backgroundColor:ele}} onClick={handleClick}>{ele}</button>
        })}
      </div>
    </div>
    </>
  );
}

export default App
