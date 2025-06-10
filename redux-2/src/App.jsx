import { useDispatch, useSelector } from "react-redux";
import store from "./exe-1/store";


export default function App(){
  const dispatch=useDispatch();
  const count=useSelector(store=>store.count)
  return(
    <div>
           <h2>{count}</h2>
           <button onClick={()=> dispatch({type:"increment"})}>increment</button>
           <button onClick={()=> dispatch({type:"decrement"})}>decrement</button>
           <button onClick={()=> dispatch({type:"reset"})}>reset</button>
    </div>
  )
}