import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Vite + React + Tailwind</h1>
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
        <button
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="text-indigo-400">src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
