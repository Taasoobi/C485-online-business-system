import { useEffect, useState } from "react"
import { api } from "../services/api"

function Employees() {

  const [employee, setEmployee] = useState([])

  useEffect(() => {
    api.get("/employees").then(res => {
      setEmployee(res.data)
    })
  }, [])

  return (
    <div className="p-6">

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Employees</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Employee
        </button>
      </div>

      {employee.map(emp => (
        <div key={emp.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">First Name: {emp.first_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Last Name: {emp.last_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Age: {emp.age}</h6>
        <h6 className="text-lg font-semibold mb-1">Salary: ${emp.salary}</h6>
        <h6 className="text-lg font-semibold mb-1">Position: {emp.position}</h6>
        </div>
      ))}

    </div>
  )
}

export default Employees