import { FC, useState } from 'react';
import classes from "./Counter.module.scss";

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const onIncrementCount = () => {
    setCount((prev: number) => prev + 1);
  }

  return (
    <div className={classes.counter}>
      <h2>{count}</h2>
      <button onClick={onIncrementCount}>Increment count</button>
    </div>
  );
};
