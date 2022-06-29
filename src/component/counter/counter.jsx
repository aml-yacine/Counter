import { useState } from "react";
import './counter.css';
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
    return <div className="counter_card w-50 mx-auto text-center  p-5 shadow rounded ">
        <h1 className="py-3">{number}</h1>
        <div className=" mt-5 py-2">
        <button onClick={toIncreament} className="btn btn-outline-dark m-4 w-25 ">increment +</button>
        <button onClick={todecreament} className="btn btn-outline-dark m-4 w-25">decrement -</button>
        </div>
    </div>
}
export default Counter;

