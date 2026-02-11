import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  name: "",
  email: "",
  password: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    // Counter
    case "INC":
      return { ...state, count: state.count + 5 };
    case "DEC":
      return { ...state, count: state.count - 5 };
    case "RESET_COUNT":
      return { ...state, count: 0 };

    // Form
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET_FORM":
      return { ...state, name: "", email: "", password: "" };

    // Todo
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    case "CLEAR_ALL":
      return { ...state, todos: [] };

    default:
      return state;
  }
};

const ReducerTasks = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-8">

        {/* Counter */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Counter</h2>
          <p className="text-2xl font-bold mb-4">{state.count}</p>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch({ type: "INC" })}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              +5
            </button>
            <button
              onClick={() => dispatch({ type: "DEC" })}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              -5
            </button>
            <button
              onClick={() => dispatch({ type: "RESET_COUNT" })}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Form Manager</h2>
          <div className="space-y-2">
            <input
              className="w-full border p-2 rounded"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="Email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
            />
            <input
              type="password"
              className="w-full border p-2 rounded"
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
            <button
              onClick={() => dispatch({ type: "RESET_FORM" })}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Reset Form
            </button>
          </div>
        </div>

        {/* Todo */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Todo List</h2>
          <div className="flex gap-2 mb-3">
            <input
              className="flex-1 border p-2 rounded"
              placeholder="New todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button
              onClick={() => {
                if (todoText.trim()) {
                  dispatch({ type: "ADD_TODO", payload: todoText });
                  setTodoText("");
                }
              }}
              className="bg-purple-500 text-white px-4 rounded"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {state.todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
                <span>{todo}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: index })
                  }
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          {state.todos.length > 0 && (
            <button
              onClick={() => dispatch({ type: "CLEAR_ALL" })}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded"
            >
              Clear All
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default ReducerTasks;
