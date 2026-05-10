import useCounterStore from "../store/counter-store";

const useCounter = () => {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);

  return { count, increment, decrement, reset };
};

export default useCounter;
