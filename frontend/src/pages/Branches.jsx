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
    <div className="p-6">

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Branches</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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