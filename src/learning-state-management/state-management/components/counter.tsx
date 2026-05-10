import { Button } from "@/components/ui/button";
import { useReducer } from "react";
import counterReducer from "../reducer/counter-reducer";

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
      <Button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={count === 0}
      >
        -
      </Button>
      <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </div>
  );
};

export default Counter;
