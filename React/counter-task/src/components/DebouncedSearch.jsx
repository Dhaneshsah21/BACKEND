import {
  useEffect,
  useReducer,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";

const Results = lazy(() => import("./Results"));

/* ---------- Reducer ---------- */
const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const DebouncedSearch = () => {
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const [searchText, setSearchText] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [history, dispatch] = useReducer(historyReducer, []);

  /* Auto focus */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /* Debounce handler */
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        setSearchCount((c) => c + 1);
        dispatch({ type: "ADD", payload: value });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Debounced Search
        </h2>

        <input
          ref={inputRef}
          value={searchText}
          onChange={handleChange}
          placeholder="Type to search..."
          className="w-full border p-2 rounded mb-3"
        />

        <p className="text-sm mb-3">
          Search Count: <b>{searchCount}</b>
        </p>

        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          className="mb-3 px-3 py-1 bg-red-500 text-white rounded"
        >
          Clear History
        </button>

        <ul className="list-disc pl-5 text-sm mb-4">
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Suspense fallback={<p>Loading results...</p>}>
          <Results query={searchText} />
        </Suspense>
      </div>
    </div>
  );
};

export default DebouncedSearch;
