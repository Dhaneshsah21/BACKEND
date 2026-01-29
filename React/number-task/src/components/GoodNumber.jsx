import { useState } from "react"

const GoodNumber = () => {
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

  const checkNumber = () => {
    const value = Number(number)

    if (value % 10 === 0 && value >= 10 && value <= 100) {
      setMessage("Good Number ✅")
    } else {
      setMessage("Not a Good Number ❌")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-2xl font-bold">
          Good Number Checker
        </h1>

        <input
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="border px-3 py-2 rounded w-full"
        />

        <button
          onClick={checkNumber}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg w-full"
        >
          Check Number
        </button>

        {message && (
          <p className="text-lg font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default GoodNumber
