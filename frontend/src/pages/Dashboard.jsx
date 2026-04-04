//import { useEffect, useState } from "react"
//import { api } from "../services/api"

function Dashboard() {
  //const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center justify-center">

      <h1 class="text-9xl font-extrabold text-blue-600 mb-10">
        Businexus Dashboard
      </h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        View Branches
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        View Employees
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        View Inventory
      </button>
    </div>
  )
}

export default Dashboard