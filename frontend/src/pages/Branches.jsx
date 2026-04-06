import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import branchphoto from "../assets/hub.png"
import employee from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Branches() {
  const navigate = useNavigate();
  const [branch, setBranch] = useState([])

  useEffect(() => {
    api.get("/branches").then(res => {
      setBranch(res.data)
    })
  }, [])

    const goToEmployees = () => {
      navigate("/employees")
    }
    const goToInventory = () => {
      navigate("/inventory")
    }
    const goToBranches = () => {
      navigate("/branches")
    }
    const handleLogout = () => {
      navigate("/")
    }
    const goToDashboard = () => {
      navigate("/dashboard")
    }
    const goMain = () => {
      navigate("/")
    }

  return (
    <div className="">
      <div className=" text-blue-500 font-bold flex items-center justify-between bg-gray-800 p-6">
        <button onClick={goToDashboard} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Dashboard</button>
        <h3 onClick={goMain} className="text-6xl text-blue-500 font-bold">Businexus</h3>
        <button onClick={handleLogout} className="bg-gray-300 flex hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Logout <img src={logout} alt="Logout" className="ml-2 w-6 h-6" /></button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div onClick={goToBranches} className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center"><img src={branchphoto} alt="Branches" className="w-6 h-6 mr-2" />Branches</div>
        <div onClick={goToInventory} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={inventory} alt="Inventory" className="w-6 h-6 mr-2" />Inventory</div>
        <div onClick={goToEmployees} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={employee} alt="Employees" className="w-6 h-6 mr-2" />Employees</div>
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