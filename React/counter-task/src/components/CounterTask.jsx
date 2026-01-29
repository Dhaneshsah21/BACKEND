import { useState } from "react"

const CounterTask = () => {
  const [count, setCount] = useState(0)

  const increaseByThree = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          Count: {count}
        </h1>

        <button
          onClick={increaseByThree}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Increase by 3
        </button>
      </div>
    </div>
  )
}

export default CounterTask
