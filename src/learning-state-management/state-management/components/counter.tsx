import { Button } from "@/components/ui/button";
import useCounter from "../hooks/use-counter";

const Counter = () => {
  const { count, decrement, increment, reset } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement} disabled={count === 0}>
        -
      </Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Counter;
