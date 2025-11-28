import Dashboard from "./Dashboard"
import Clubpage from "./Clubpage"
import Login from "./Login"
import { Routes, Route } from 'react-router-dom';
const Main = () => {
  return (
    <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departmental-club" element={<Clubpage />} />
          <Route path="/others-club" element={<Clubpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </main>
  )
}

export default Main