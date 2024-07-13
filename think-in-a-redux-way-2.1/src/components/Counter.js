import { connect } from "react-redux";
import { increment } from "../redux/counter/actions";
import { decrement } from "../redux/counter/actions";

function Counter({ count1, increment, decrement }) {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  // };

  // const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count1}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count1: state.value,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
