import { useEffect, useState } from "react"
import { api } from "../services/api"

function Branches() {
  const [branch, setBranch] = useState([])

  useEffect(() => {
    api.get("/branches").then(res => {
      setBranch(res.data)
    })
  }, [])

  return (
    <div className="">
      <div className=" text-blue-500 font-bold flex items-center justify-between bg-gray-800 p-6">
        <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Dashboard</button>
        <h3 className="text-6xl text-blue-500 font-bold">Businexus</h3>
        <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Logout</button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center">Branches</div>
        <div className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer">Inventory</div>
        <div className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer">Employees</div>
      </div>

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Branches</p>
        <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded">
          Add Branch
        </button>
      </div>

      {branch.map(br => (
        <div key={br.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">Street: {br.branch_street}</h6>
        <h6 className="text-lg font-semibold mb-1">City: {br.branch_city}</h6>
        <h6 className="text-lg font-semibold mb-1">Zipcode: {br.branch_zipcode}</h6>
        <h6 className="text-lg font-semibold mb-1">State: {br.branch_state}</h6>
        <h6 className="text-lg font-semibold mb-1">Revenue: ${br.revenue}</h6>
        <h6 className="text-lg font-semibold mb-1">Number of Employees: {br.number_of_employees}</h6>
        </div>
      ))}

    </div>
  )
}

export default Branches