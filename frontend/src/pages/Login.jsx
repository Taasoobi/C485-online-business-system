import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault() }

    // For now just simulate login
    console.log("Logging in:", form)

    // Later you will call your Flask API here

    navigate("/dashboard")

    //Sign up Section
    const [showSignup, setShowSignup] = useState(true)

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: ""
    })

    const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
    }

    const handleSignupSubmit = (e) => {
    e.preventDefault()

    console.log("Signing up:", signupForm)

  // later → send to Flask API

    setShowSignup(false)
    }

  

  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col gap-6">

      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Title */}
        <h2 className="text-2xl text-gray-700 font-bold text-center mb-6">
          Login to <span className="text-blue-600">Businexus</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Username */}
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        {/* Optional: Cancel / Back */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>

      </div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex items-center justify-center">
        <h2 className="text-lg text-gray-700 font-bold text-center">
          Don't have an account? <span onClick={() => setShowSignup(true)} className="text-blue-600">Sign Up</span>
        </h2>
      </div>

        {/* Sign Up Modal */}
        {showSignup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

      <h2 className="text-2xl font-bold text-center mb-6">
        Create Account for <span className="text-blue-600">Businexus</span>
      </h2>

      <form onSubmit={handleSignupSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleSignupChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleSignupChange}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
        >
          Sign Up
        </button>
      </form>

      {/* Close button */}
      <button
        onClick={() => setShowSignup(false)}
        className="mt-4 w-full text-gray-500 hover:text-gray-700"
      >
        Cancel
      </button>

    </div>
  </div>
)}

    </div>
  )
}

export default Login
