import { useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getJoke } from "../features/jokes/jokesSlice";
import { useAppDispatch } from "../hooks";

const Joke = () => {
  const { joke, isLoading } = useAppSelector((store) => store.joke);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJoke());
  }, []);

  return (
    <div className="flex flex-col gap-[10px] bg-[#85e7c1] rounded-md p-4 max-w-[200px]">
      <h3>RANDOM JOKE</h3>
      {isLoading ? <div><h3>Loading...</h3></div> : joke ? (
        <div>
          <h3>{joke?.attachments[0]?.text}</h3>
          <button onClick={() => dispatch(getJoke())}>Refresh Joke</button>
        </div>
      ) : <div><button onClick={() => dispatch(getJoke())}>GET JOKE</button></div>}
    </div>
  );
};
export default Joke;
