import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "./store/reducer/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);
  console.log(value);

  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-800 h-screen w-full text-white">
      <div className="w-[80%] mx-auto bg-zinc-600 relative h-[10rem] text-center py-2">
        <h1 className="text-5xl">Counter: {value}</h1>
        <div className="btns flex gap-5 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <button
            onClick={() => dispatch(increment())}
            className="py-3 px-5 bg-blue-500 rounded-xl"
          >
            Increment
          </button>
          
          <button
            onClick={() => dispatch(decrement())}
            className="py-3 px-5 bg-blue-500 rounded-xl"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementAsync(5))}
            className="py-3 px-5 bg-blue-500 rounded-xl"
          >
            Increment By 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
