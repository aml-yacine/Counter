import { useState } from "react";
const Counter = ()=>{
  const [number, setNumber] = useState(0)

  const toIncreament = () => {
    console.log("increment")
    setNumber(number + 1)
  }
  const todecreament = () => {
    number > 0 ? setNumber(number - 1) : setNumber(number)
    console.log("decrement")
  }
    return <div className="w-50 mx-auto my-5 text-center">
        <h1>{number}</h1>
        <div className=" mt-5">
        <button onClick={toIncreament} className="btn btn-warning m-4 w-25">increment</button>
        <button onClick={todecreament} className="btn btn-danger m-4 w-25">decrement</button>
        </div>
    </div>
}
export default Counter;