import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import branch from "../assets/hub.png"
import employeephoto from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Employees() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    api.get("/employees").then(res => {
      setEmployee(res.data)
    })
  }, [])

    const goToBranches = () => {
      navigate("/branches")
    }
    const goToInventory = () => {
      navigate("/inventory")
    }
    const goToDashboard = () => {
      navigate("/dashboard")
    }
    const goToEmployees = () => {
      navigate("/employees")
    }
    const goMain = () => {
      navigate("/")
    }
    const handleLogout = () => {
      navigate("/")
    }

  return (
    <div className="">
    <div className=" text-blue-500 font-bold flex items-center justify-between bg-gray-800 p-6">
        <button onClick={goToDashboard} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Dashboard</button>
        <h3 onClick={goMain} className="text-6xl text-blue-500 font-bold">Businexus</h3>
        <button onClick={handleLogout} className="bg-gray-300 hover:bg-blue-700 flex hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Logout <img src={logout} alt="Logout" className="w-6 h-6 ml-2" /></button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div onClick={goToBranches} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={branch} alt="Branches" className="w-6 h-6 mr-2" />Branches</div>
        <div onClick={goToInventory} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={inventory} alt="Inventory" className="w-6 h-6 mr-2" />Inventory</div>
        <div onClick={goToEmployees} className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center"><img src={employeephoto} alt="Employees" className="w-6 h-6 mr-2" />Employees</div>
      </div>

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Employees</p>
        <button className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded">
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