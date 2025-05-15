import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }





import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/blogs/create" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
        <Route path="/blogs/edit/:id" element={<PrivateRoute><EditBlog /></PrivateRoute>} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        {/* <Route path="/blogs/create" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
        <Route path="/blogs/edit/:id" element={<PrivateRoute><EditBlog /></PrivateRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import BlogList from "./pages/BlogList";
// import BlogDetail from "./pages/BlogDetail";
// import CreateBlog from "./pages/CreateBlog";
// import EditBlog from "./pages/EditBlog";
// import Navbar from "./components/Navbar";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BlogList />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/blogs" element={<BlogList />} />
//         <Route path="/blogs/:id" element={<BlogDetail />} />
//         <Route path="/blogs/create" element={<CreateBlog />} />
//         <Route path="/blogs/edit/:id" element={<EditBlog />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
